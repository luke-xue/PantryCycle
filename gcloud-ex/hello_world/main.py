# Copyright 2016 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import webapp2

# import firebase_admin
# from firebase_admin import db
# from firebase_admin import credentials
# import json
# import webapp2

# cred_object = credentials.Certificate("./divhacks-d18b7-firebase-adminsdk-odcaf-7a5ab53b14.json")
# default_app = firebase_admin.initialize_app(cred_object, {
# 	'databaseURL':"https://divhacks-d18b7-default-rtdb.firebaseio.com/"
# 	})

# ref = db.reference("/")

# # # with open("books.json", "r") as f:
# # # 	file_contents = json.load(f)
# # # ref.set(file_contents)

# # books = ref.get()
# # print(books)

# ref = db.reference("/")
# # ref.set({
# # 	"Books":
# # 	{
# # 		"Best_Sellers": -1
# # 	}
# # })

# ref = db.reference("/Books/Best_Sellers")
# # with open("books.json", "r") as f:
# # 	file_contents = json.load(f)

# # for key, value in file_contents.items():
# # 	ref.push().set(value)
# print(ref.get())

import firebase_admin
from firebase_admin import db
from firebase_admin import credentials


class MainPage(webapp2.RequestHandler):
    def get(self):
        cred_object = credentials.Certificate("./divhacks-d18b7-firebase-adminsdk-odcaf-7a5ab53b14.json")
        default_app = firebase_admin.initialize_app(cred_object, {
            'databaseURL':"https://divhacks-d18b7-default-rtdb.firebaseio.com/"
            })

        ref = db.reference("/")
        vals = ref.get()
        self.response.headers['Content-Type'] = 'text/plain'
        self.response.write(str(vals))


app = webapp2.WSGIApplication([
    ('/', MainPage),
], debug=True)
