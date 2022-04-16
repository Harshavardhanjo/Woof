import math
from urllib import response
import firebase_admin
from firebase_admin import credentials, firestore
import flask_cors as Cors
from flask import Flask, request, jsonify
import requests
from decouple import config


cred = credentials.Certificate("./cred.json")
firebase_admin.initialize_app(cred)

app = Flask(__name__)
Cors.CORS(app)

@app.route('/fetchVendors', methods=['POST','GET'])
def get_Vendors():
    if request.method == "POST":
        data = request.get_json()
        vendors = getVendor(data['location'],data['service'],data['lattitude'],data['longitude'],data['pet'],data['city'],data['sort'])
        return jsonify(vendors)


def getVendor(location,service,lattitude,longitude,pet,city,sort):
    print('data',location,service,lattitude,longitude,pet,city,sort)
    db = firestore.client()
    vendor_ref = db.collection('Vendor')
    vendor = vendor_ref.where(u'Location',u'array_contains',city).stream()
    vendors = []
    print(sort)
    tag = sort
    for doc in vendor:
        doc = doc.to_dict()
        if service in doc['Services'] and pet in doc['Pets']:
            doc['Distance'] = getDistance(str(lattitude)+','+str(longitude),str(doc['Location'][0])+','+str(doc['Location'][1]))
            doc['Rating'] = 5 - math.floor(float((doc['Rating'])))
            vendors.append(doc)
        print(vendors)
        if(vendors != []):
            vendors = sortVendors(vendors,tag)

    return vendors

def sortVendors(vendors,tag):
    vendors.sort(key=lambda x: x[tag])
    return vendors

    

def getDistance(origin,destination):
    key = config('KEY')
    url = ('https://maps.googleapis.com/maps/api/distancematrix/json'+ '?language=en-US&units=imperial'+ '&origins={}'+ '&destinations={}'+ '&key={}').format(origin, destination, key)
    response = requests.request("GET", url).json()
    dist = float(response['rows'][0]['elements'][0]['distance']['text'].split(' ')[0])
    return dist

@app.route('/CreateUser', methods=['POST','GET'])
def createUser():
    if request.method == "POST":
        data = request.get_json()
        db = firestore.client()
        user_ref = db.collection('User')
        user_ref.add(data)
        return jsonify(data)

@app.route('/GetLocation', methods=['POST','GET'])
def getLocation():
    if request.method == "POST":
        data = request.get_json()
        key = config('KEY')
        url = ('https://maps.googleapis.com/maps/api/geocode/json?latlng={lattitude},{longitude}&key={key}').format(lattitude=data['lattitude'],longitude=data['longitude'],key=key)
        response = requests.request("GET", url).json()
        data = {'city' : response['plus_code']['compound_code'].split(',')[0].split(' ')[1],'location' : response['results'][0]['formatted_address']}
        print(data)
        return jsonify(data)
        


if __name__ == '__main__':
    app.run(debug=True)
    