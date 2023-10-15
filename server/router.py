from flask import Flask, request
import os
from passlib.hash import sha256_crypt
import traceback
import json

def main(testing, app, db, users):
    #gunicorn -w 4 "server.src.router:main()"
    @app.route("/login/", methods=["POST"]) #login page
    def login():
        usern = request.args.get("usern")
        passw = request.args.get("passw")
        if request.method == 'POST': #login page
            find_user = users.query.filter_by(username=usern).first() #finds based on username
            if find_user == None: #If there is no user fouund with that username
                return {"token": "failed", "reason": "User not found"}
            else:
                right_password = users.validate(passw, find_user.password)
                if right_password:
                    if find_user.active == "True":
                        return {"token": "logged in", "config": find_user.userId}
                    else:
                        return {"token": "failed", "reason": "account is not active"}
                else:
                    return {"token": "failed", "reason": "Invalid Credentials"}

    @app.route("/createaccount/", methods=["POST"])
    def createaccount():
        usern = request.args.get("usern")
        email = request.args.get("email")
        passw = request.args.get("passw")
        if request.method == 'POST':
            find_user_un = users.query.filter_by(username=usern).first()
            find_user_ea = users.query.filter_by(email=email).first()
            if find_user_un: #there already is an account with the information meaning they need to login
                return {"account": "Already an account matching username"}
            if find_user_ea:
                return {"account": "Already an account matching email"}
            else: #Create new account, Inseert the form data into the database and redirect them to login
                usr = users(usern, email, passw) #blank string for refresh token
                db.session.add(usr)
                db.session.commit()
                return {"account": "created successfully!"}
    
    @app.route("/publishcleanup/", methods=["POST"])
    def publishcleanup():
        eventDetails = request.get_json()
        "eventName"
        "author"
        "picture"
        "description"
        "location"
        "date"
        "materials"
        find_user = users.query.filter_by(username="cleanup").first() #our 'User' that stores all cleanup events
        if find_user == None:
            return {"token": "failed", "reason": "User not found"} #should never happen 
        else:
            find_user.events.append(eventDetails)
            db.session.commit()
            return {"token": "Success"}

    @app.route("/getcleanups/", methods=["GET"])
    def getcleanups():
        find_user = users.query.filter_by(username="cleanup").first() #our 'User' that stores all cleanup events
        if find_user == None:
            return {"token": "failed", "reason": "User not found"} #should never happen 
        else:
            return {"token": "Success", "events": find_user.events} #!Will info be readable?
    
    @app.route("/publishpost/", methods=["POST"])
    def publishpost():
        postDetails = request.get_json()
        "postName"
        "author"
        "picture"
        "description"
        "location"
        "date" #date that client side generates
        find_user = users.query.filter_by(username="posts").first() #our 'User' that stores all posts
        if find_user == None:
            return {"token": "failed", "reason": "User not found"} #should never happen 
        else:
            find_user.events.append(postDetails)
            db.session.commit()
            return {"token": "Success"}

    @app.route("/getposts/", methods=["GET"])
    def getposts():
        find_user = users.query.filter_by(username="posts").first() #our 'User' that stores all cleanup events
        if find_user == None:
            return {"token": "failed", "reason": "User not found"} #should never happen 
        else:
            return {"token": "Success", "events": find_user.events} #!Will info be readable?
        
    if testing:  
        with app.app_context():
            db.create_all()
        app.run(host = "localhost", port=6900, debug=True)
        #app.run(debug=True)
    else:
        db.create_all()
        return app