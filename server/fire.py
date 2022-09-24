import firebase_admin
from firebase_admin import db
from firebase_admin import credentials
import json

cred_object = credentials.Certificate("./divhacks-d18b7-firebase-adminsdk-odcaf-7a5ab53b14.json")
default_app = firebase_admin.initialize_app(cred_object, {
	'databaseURL':"https://divhacks-d18b7-default-rtdb.firebaseio.com/"
	})

ref = db.reference("/")

ref = db.reference("/")
# ref.set({
# 	"PlateApp":
# 	{
# 		"Carbs": -1,
# 		"Veggies":-1,
# 		"Fruits":-1,
# 		"Protein":-1,
# 		"Dairy":-1
# 	}
# })

# with open("books.json", "r") as f:
# 	file_contents = json.load(f)

food = {"Name":"Burger","Type":"Protein", "Lat":1, "Long":2, "Footprint":1}

# for key, value in file_contents.items():
# 	ref.push().set(value)
# if food["Type"] == "Protein":
# 	ref = db.reference("/PlateApp/Protein")
# 	ref.push().set(food)

def writedb(json):
	if food["Type"] == "Protein":
		ref = db.reference("/PlateApp/Protein")
		ref.push().set(food)
	#veggie, fruit

def readdb(json):
	print(ref.get())