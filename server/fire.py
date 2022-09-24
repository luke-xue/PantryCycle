import firebase_admin
from firebase_admin import db
from firebase_admin import credentials
import json

def initialize():
	cred_object = credentials.Certificate("./divhacks-d18b7-firebase-adminsdk-odcaf-7a5ab53b14.json")
	default_app = firebase_admin.initialize_app(cred_object, {
		'databaseURL':"https://divhacks-d18b7-default-rtdb.firebaseio.com/"
		})

def reset():
	# print("0")
	ref = db.reference("/")
	# print("1")
	ref.set({
		"All" : {}
	})
	# print("2")

# for key, value in file_contents.items():
# 	ref.push().set(value)
# if food["Type"] == "Protein":
# 	ref = db.reference("/PlateApp/Protein")
# 	ref.push().set(food)

def writedb(Restaurant, Name, Type, Count, Lat, Long, Calories, Footprint):
	food = {"Restaurant": Restaurant, "Name":Name,"Type":Type, "Count": Count,"Lat":Lat, "Long":Long, "Calories": Calories, "Footprint": Footprint}

	directory = "/All/"

	ref = db.reference(directory)
	ref.child(Restaurant).set(food)

	# ref.push().set(food)
	#veggie, fruit
	print("yay")

def readAll():
	directory = "/All/" 
	ref = db.reference(directory)
	return ref.get()


def rank():
	directory = "/All/" 
	ref = db.reference(directory)
	all_shops = ref.get()[directory]
	for shop in all_shops:
		calories = shop["Calories"]

