import mysql.connector
from flask_cors import CORS
from flask import Flask, request, jsonify
from flask_bcrypt import Bcrypt
import random
import string
from sshtunnel import SSHTunnelForwarder


app = Flask(__name__)
CORS(app)
bcrypt = Bcrypt(app)


port = 3306
host = "127.0.0.1"
database = "group8"
username = "group8"
password = "olemi$$2023"


def request_connection():
    try:
        print("attempt")
        conn = mysql.connector.connect(
            host=host, user=username, password=password, database=database, port=port
        )
        print("Connected successfully")
        return conn

    except mysql.connector.Error as e:
        print("Connection failed:", e)
        return e


def request_cursor(conn):
    return conn.cursor()


@app.route("/api/create-admin", methods=["POST"])
def create_admin():
    conn = request_connection()
    cur = request_cursor(conn)

    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    hashed_password = bcrypt.generate_password_hash(password).decode()

    signup_query = """INSERT INTO admin (email, password)
                    VALUES (%s, %s)"""

    cur.execute(
        signup_query,
        (
            email,
            hashed_password,
        ),
    )
    conn.commit()

    cur.close()
    conn.close()

    return ""


@app.route("/api/login", methods=["POST"])
def login():
    conn = request_connection()
    cur = request_cursor(conn)

    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    login_query = """SELECT * FROM admin WHERE email = %s"""
    cur.execute(login_query, (email,))
    user = cur.fetchone()

    cur.close()
    conn.close()

    if user is None:
        return jsonify({"error": "Unauthorized"}), 401

    hashed_password = user[2]

    if not bcrypt.check_password_hash(hashed_password, password):
        return jsonify({"error": "Unauthorized"}), 401

    return jsonify({"message": "Login successful"}), 200


@app.route("/api/generate-key", methods=["POST"])
def generate_key():
    conn = request_connection()
    cur = request_cursor(conn)

    characters = string.ascii_letters + string.digits
    code = "".join(random.choice(characters) for _ in range(16))

    create_application_form_query = """INSERT INTO recipient (code)
                                VALUES (%s)"""

    cur.execute(create_application_form_query, (code,))
    conn.commit()

    cur.close()
    conn.close()

    return code


@app.route("/api/recipients", methods=["GET"])
def get_recipients():
    conn = request_connection()
    cur = request_cursor(conn)

    get_recipients_query = """SELECT * FROM recipient WHERE email IS NOT NULL"""
    cur.execute(get_recipients_query)

    recipients = cur.fetchall()

    cur.close()
    conn.close()

    return recipients


@app.route("/api/validate-code/<code>", methods=["GET"])
def validate_code(code):
    conn = request_connection()
    cur = request_cursor(conn)

    validate_code_query = """SELECT * FROM recipient
                            WHERE code = %s AND email IS NULL"""

    cur.execute(validate_code_query, (code,))

    result = cur.fetchone()

    cur.close()
    conn.close()

    if result:
        return jsonify({"status": "success", "message": "Code is valid"}), 200

    # Code is invalid
    return jsonify({"status": "error", "message": "Invalid code"}), 400


@app.route("/api/application-form", methods=["POST"])
def submit_application_form():
    conn = request_connection()
    cur = request_cursor(conn)

    data = request.get_json()
    print(data)

    email = data.get("email")
    physicalAddress = data.get("physicalAddress")
    firstName = data.get("firstName")
    lastName = data.get("lastName")
    code = data.get("code")

    submit_form_query = """UPDATE recipient SET email = %s,
                            home_address = %s, first_name = %s, last_name = %s
                            WHERE code = %s"""

    cur.execute(submit_form_query, (email, physicalAddress, firstName,
                                    lastName, code))
    conn.commit()
    cur.close()
    conn.close()

    return ""


@app.route("/")
def server():
    return ""


if __name__ == "__main__":
    app.run(debug=True)
