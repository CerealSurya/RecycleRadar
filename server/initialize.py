from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from passlib.hash import sha256_crypt
from router import main
import random

def create_app(testing=True):
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.sqlite3'
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db = SQLAlchemy(app)
    #num = int(random.random() * 1000)
    class users(db.Model):
        _id = db.Column("id", db.Integer, primary_key=True)
        username = db.Column(db.String(100))
        email = db.Column(db.String(100))
        password = db.Column(db.String(100))
        userId = db.Column(db.Integer)
        events = db.Column(db.JSON)

        def __init__(self, username, email, password):
            self.username = username
            self.email = email
            self.password = password #comes encrypted
            self.userId = int(random.random() * 100000)
            self.events = [] #All user events are empty, unless they are admin users

        def validate(input, db_passw):
            return sha256_crypt.verify(input, db_passw) #veerifying password input is = to encrypted password in db
            #returns true or false
        
    return main(testing, app, db, users)