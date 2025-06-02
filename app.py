from flask import Flask, render_template, redirect, session, request, url_for
from app.packages.user import *
from app.packages.utils import Search
import re

app = Flask(__name__, template_folder="app/templates", static_folder="app/static")
app.secret_key = 'segredos são importantes'

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/register', methods=["GET", "POST"])
def register():
    # if session["user"]:
    #     return redirect(url_for("dashboard"))
    
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")
        name = request.form.get("name")
        number = str(request.form.get("ddd")) + " " + str(request.form.get("phone"))
        Client(email, password, name, number).create_user()
        return redirect(url_for("login"))
    
    return render_template("register.html")

@app.route('/login', methods=["GET", "POST"])
def login():
    # if session["user"]:
    #     return redirect(url_for("dashboard"))
    
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")
        
        user = Search().search_email(email)
        if user and (password == user["password"]):
            session["user"] = user["name"]
            session["type"] = user["type"]
            
            return redirect(url_for("index"))
        
        else:
            return render_template("login.html", error="Email ou senha incorretos")
            
    
    return render_template("login.html")

if __name__ == "__main__":
    app.run(debug=True)