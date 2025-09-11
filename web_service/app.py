from flask import Flask, Response

NBN_DATA_URL = "../public/nbn_data.json"

app = Flask(__name__)


@app.route("/")
def get_common_trees():

    with open(NBN_DATA_URL, "r") as f:
        s = f.read()
        return Response(s, mimetype="application/json")
