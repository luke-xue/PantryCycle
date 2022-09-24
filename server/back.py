from flask import Flask ,jsonify, request

import fire

app = Flask(__name__)

# @app.route('/')
# def index():
#     return 'Web App with Python Flask!'

# app.run(host='0.0.0.0', port=81)

@app.route('/readAll', methods = ['GET'])
def get_articles():
    return jsonify(fire.readAll())


# initialize. should always run when the app first starts 
@app.route('/init', methods = ['POST']) 
def init():
    fire.initialize()
    return "success"


@app.route('/add', methods = ['POST']) 
def add_item():
    Restaurant = request.json['Restaurant']
    Name = request.json['Name']
    Type = request.json['Type']
    Count = request.json['Count']
    Lat = request.json['Lat']
    Long = request.json['Long']
    Calories = request.json['Calories']
    Footprint = request.json['Footprint']
    fire.writedb(Restaurant, Name, Type, Count, Lat, Long, Calories, Footprint)
    return "add success"

    # if (what == "initialize"):
    #     fire.initialize()
    # if (what == "reset"):
    #     fire.reset()
    # if (what == "write"):
    #     fire.writedb()
    # return jsonify(what)

@app.route('/reset', methods = ['POST'])
def reset():
    fire.reset()
    return "reset success"


if __name__ == "__main__":
    app.run(debug=True)