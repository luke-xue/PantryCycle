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
    Restaurant = request.json['Restaurant']
    Name = request.json['Name']
    Type = request.json['Type']
    Count = request.json['Count']
    Lat = request.json['Lat']
    Long = request.json['Long']
    Calories = request.json['Calories']
    Footprint = request.json['Footprint']
    Description = request.json['Description']
    Image = request.json['Image']


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




@app.route("/send-image/<path:url>", methods = ['POST'])
def image_check(url):
    Restaurant = request.json['Restaurant']
    Name = request.json['Name']
    base64 = request.json['base64']
    
    # ----- SECTION 2 -----
    try:
        # Base64 DATA
        if "data:image/jpeg;base64," in url:
            base_string = url.replace("data:image/jpeg;base64,", "")
            decoded_img = base64.b64decode(base_string)
            img = Image.open(BytesIO(decoded_img))

            file_name = Restaurant + ".jpg"
            img.save(file_name, "jpeg")

        # Base64 DATA
        elif "data:image/png;base64," in url:
            base_string = url.replace("data:image/png;base64,", "")
            decoded_img = base64.b64decode(base_string)
            img = Image.open(BytesIO(decoded_img))

            file_name = Restaurant + ".png"
            img.save(file_name, "png")

        # Regular URL Form DATA
        else:
            response = requests.get(url)
            img = Image.open(BytesIO(response.content)).convert("RGB")
            file_name = Restaurant + ".jpg"
            img.save(file_name, "jpeg")
        
    # ----- SECTION 3 -----    
        status = "Image has been succesfully sent to the server."
    except Exception as e:
        status = "Error! = " + str(e)


    return status