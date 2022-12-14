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
    return "init success"


@app.route('/add', methods = ['POST']) 
def add_item():
    print("negion")
    Restaurant = request.json['Restaurant']
    Name = request.json['Name']
    print("name")
    Type = request.json['Type']
    Count = request.json['Count']
    Lat = request.json['Lat']
    print("late")
    Long = request.json['Long']
    Calories = request.json['Calories']
    print("calor")
    Footprint = request.json['Footprint']
    Description = request.json['Description']
    print("dscript")
    Image = request.json['Image']
    print("after")


    if (Footprint == "n/a"):
        carbon_grams = -1
        if (Type == "Carbs"):
            grams = Calories / 4 
            carbon_grams = 0.75 * grams


        if (Type == "Protein"):
            grams = Calories / 4
            carbon_grams = 10 * grams

        if (Type == "Fruits" or Type == "Vegetables"):
            grams = Calories
            carbon_grams = 0.5 * grams 

        carbon_grams = carbon_grams* 3.5 # waste / decay 

        Footprint = round(carbon_grams, 1)



    # # ----- SECTION 2 -----
    # try:
    #     # Base64 DATA
    #     if "data:image/jpeg;base64," in url:
    #         base_string = url.replace("data:image/jpeg;base64,", "")
    #         decoded_img = base64.b64decode(base_string)
    #         img = Image.open(BytesIO(decoded_img))

    #         file_name = Restaurant + Name + ".jpg"
    #         img.save(file_name, "jpeg")

    #     # Base64 DATA
    #     elif "data:image/png;base64," in url:
    #         base_string = url.replace("data:image/png;base64,", "")
    #         decoded_img = base64.b64decode(base_string)
    #         img = Image.open(BytesIO(decoded_img))

    #         file_name = Restaurant + Name + ".png"
    #         img.save(file_name, "png")

    #     # Regular URL Form DATA
    #     else:
    #         response = requests.get(url)
    #         img = Image.open(BytesIO(response.content)).convert("RGB")
    #         file_name = Restaurant + Name +  ".jpg"
    #         img.save(file_name, "jpeg")
        
    # # ----- SECTION 3 -----    
    #     status = "Image has been succesfully sent to the server."
    # except Exception as e:
    #     status = "Error! = " + str(e)


    # return status
    
    fire.writedb(Restaurant, Name, Type, Count, Lat, Long, Calories, Footprint, Description, Image)

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

@app.route('/rank', methods =['GET'])
def rank():
    lat = request.json['Lat']
    long = request.json['Long']
    return jsonify(fire.rank(lat, long))



if __name__ == "__main__":
    app.run(debug=True)



