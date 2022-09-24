import firebase_admin
from firebase_admin import db
from firebase_admin import credentials
import json
import geopy.distance
import math

# Collection is a dictionary where we map "All" : all restaurants
# all restaurants: a dictionary where each {key : value} pairing is key=restaurant value= a list
# that list is a list of dictionaries, where each dictionary has key:value pairings of diff paremeters of that food item




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
		"All" : -1
	})
	# print("2")

# for key, value in file_contents.items():
# 	ref.push().set(value)
# if food["Type"] == "Protein":
# 	ref = db.reference("/PlateApp/Protein")
# 	ref.push().set(food)

def writedb(Restaurant, Name, Type, Count, Lat, Long, Calories, Footprint, Description, Image):
	food = {"Restaurant": Restaurant, "Name":Name,"Type":Type, "Count": Count,"Lat":Lat, "Long":Long, "Calories": Calories, "Footprint": Footprint, "Description": Description, "Image": Image}

	directory = "/All/"

	ref = db.reference(directory)

	print(ref.get())
	if (ref.get() is -1): # has nothing in it yet 
		ref.child(Restaurant).set([food])
	elif (Restaurant in ref.get()): # restaurant already has some food 
		foo = ref.get()[Restaurant]
		foo.append(food)
		ref.child(Restaurant).set(foo)
	else:  # restaurant not added yet 
		ref.child(Restaurant).set([food])

	# ref.push().set(food)
	#veggie, fruit
	print("yay")

def readAll():
	directory = "/All/" 
	ref = db.reference(directory)
	return ref.get()


def rank(lat, long):
	directory = "/All/" 
	ref = db.reference(directory)
	all_shops = ref.get()
	#print(all_shops)
	#print(type(all_shops))
	pairings = {}

	ranker = {}


	for restaurant, lst in all_shops.items():
		total_score = 0
		count = 0
		for shop_params in lst: # actual individual shops now
			count = count + 1
			#print(shop)
			#print(type(shop))
			calories = shop_params["Calories"]
			Lat = shop_params["Lat"]
			Long = shop_params["Long"]
			count = shop_params["Count"]
			carbon = shop_params["Footprint"]
			coords_1 = (lat, long)
			coords_2 = (Lat, Long)
			dist = geopy.distance.geodesic(coords_1, coords_2).miles

			# dist = distance(lat, long, Lat, Long)
			print("dist: ", dist)

			# lower score is better! which is why count / calories is negative 
			total_score = total_score - (math.log(count) * calories / 6) + dist * 850 + carbon * math.log(count)
		total_score = total_score / count
		ranker[total_score] = lst
		pairings[total_score] = restaurant

		# ranker[total_score] = (restaurant, shop_params["Name"], count, carbon, shop_params["Image"])
	answer = dict(sorted(ranker.items()))
	pairings = dict(sorted(pairings.items()))
	# for key, val in pairings.items():
	# 	answer[val] = answer[key]
	# 	del answer[key]

	return answer 





