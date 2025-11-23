from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/services')
def services():
    return render_template("services.html")

@app.route('/products')
def products():
    return render_template("products.html")

@app.route('/contact')
def contact():
    return render_template("contact.html")

@app.route('/careers')
def careers():
    return render_template("careers.html")

@app.route("/employee_login")
def employee_login():
    return render_template("employee_login.html")

@app.route("/subscription")
def subscription():
    return render_template("subscription.html")



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
