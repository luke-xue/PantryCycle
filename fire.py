import firebase_admin
from firebase_admin import db
from firebase_admin import credentials
import json

cred_object = credentials.Certificate("./divhacks-d18b7-firebase-adminsdk-odcaf-7a5ab53b14.json")
default_app = firebase_admin.initialize_app(cred_object, {
	'databaseURL':"https://divhacks-d18b7-default-rtdb.firebaseio.com/"
	})

ref = db.reference("/")

# # with open("books.json", "r") as f:
# # 	file_contents = json.load(f)
# # ref.set(file_contents)

# books = ref.get()
# print(books)

ref = db.reference("/")
ref.set({
	"Books":
	{
		"Best_Sellers": -1
	}
})

ref = db.reference("/Books/Best_Sellers")
with open("books.json", "r") as f:
	file_contents = json.load(f)

for key, value in file_contents.items():
	ref.push().set(value)