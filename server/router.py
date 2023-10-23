from flask import Flask, request
import os
from passlib.hash import sha256_crypt
import traceback
import json
import requests

def main(testing, app, db, users):
    #gunicorn -w 4 "server.src.router:main()"
    @app.route("/login", methods=["POST"]) #login page
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
                    return {"token": "logged in", "config": find_user.userId, "username": find_user.username}
                else:
                    return {"token": "failed", "reason": "Invalid Credentials"}
        return {"token": "", "reason": "error"}

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
            events = []
            for event in find_user.events:
                events.append(event)
            events.append(eventDetails)
            find_user.events = events
            db.session.commit()
            return {"token": "Success", "reason": ""}

    @app.route("/getcleanups/", methods=["GET"])
    def getcleanups():
        find_user = users.query.filter_by(username="cleanup").first() #our 'User' that stores all cleanup events
        if find_user == None:
            return {"token": "failed", "reason": "User not found"} #should never happen 
        else:
            return {"token": "Success", "events": find_user.events} #TODO: Fix this endpoint to look like getPosts
    
    @app.route("/gettopcleanups/", methods=["POST"])
    def gettopcleanups():
        coords = request.get_json()
        "latitude"
        "longitude"
        find_user = users.query.filter_by(username="cleanup").first() #our 'User' that stores all cleanup events
        if find_user == None:
            return {"token": "failed", "reason": "User not found"} #should never happen 
        else:
            difference = []
            indices = []
            events = []
            def getMin():
                minimum = difference[0]
                for num in difference:
                    if num < minimum and difference.index(num) not in indices:
                        minimum = num
                indices.append(difference.index(minimum))
            for event in find_user.events:
                e = json.loads(event["location"])
                first = abs(coords["latitude"] - float(e["coords"]["latitude"]))
                second = abs(coords["longitude"] - float(e["coords"]["longitude"]))
                difference.append((first + second) / 2)
            for num in difference:
                if difference.index(num) < 5:
                    getMin()
            for num in indices:
                events.append(find_user.events[num])
            return {"token": "Success", "events": events} 

    @app.route("/publishpost/", methods=["POST"])
    def publishpost():
        postDetails = request.get_json()
        "postName"
        "author"
        "picture"
        "description"
        "location"
        "date" #date that client side generates
        "id" #server overrides it
        find_user = users.query.filter_by(username="posts").first() #our 'User' that stores all posts
        if find_user == None:
            return {"token": "failed", "reason": "User not found"} #should never happen 
        else:
            postDetails["id"] = str(len(find_user.events))
            events = []
            for event in find_user.events:
                events.append(event)
            events.append(postDetails)
            find_user.events = events
            db.session.commit()
            return {"token": "Success", "reason": ""}

    @app.route("/getposts/", methods=["GET"])
    def getposts():
        page = int(request.args.get("page"))
        find_user = users.query.filter_by(username="posts").first() #our 'User' that stores all cleanup events
        if find_user == None:
            return {"token": "failed", "reason": "User not found"} #should never happen 
        else:
            events = [] #returns events in 10 block increments
            if len(find_user.events) < 10:
                events = find_user.events
            elif page*10 > len(find_user.events):
                events = find_user.events[:10]
            elif page != 1:
                events = find_user.events[-(page*10):(page*10-10)]
            else:
                events = find_user.events[-(page*10):]
            return {"token": "Success", "events": events}
        
    @app.route("/classify-trash", methods=["POST"])
    def classify_trash():
        image = request.files['image']
        image.save("input.jpg")

        # Assuming your Trash AI server is running locally on port 5150
        response = requests.post("http://localhost:5150/classify", files={"file": open("input.jpg", "rb")})

        os.remove("input.jpg")  # Optionally delete the temporary image file

        if response.ok:
            return {"classification": response.json()}
        else:
            return {"error": "Failed to classify image"}
        
    if testing:  
        with app.app_context():
            db.create_all()
        app.run(port=6900, debug=True)
        #app.run(debug=True)
    else:
        db.create_all()
        return app