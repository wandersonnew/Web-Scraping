from flask import Flask, make_response, jsonify
from flask_cors import CORS
from scrapping import dados

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    return make_response(
        jsonify(dados)
    )