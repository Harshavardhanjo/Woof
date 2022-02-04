import firebase_admin
from firebase_admin import credentials, firestore
import flask_cors as Cors
from flask import Flask, request, jsonify
import requests

cred = credentials.Certificate("./cred.json")
firebase_admin.initialize_app(cred)

app = Flask(__name__)
Cors.CORS(app)

@app.route('/fetchVendors', methods=['POST','GET'])
def get_Vendors():
    if request.method == "POST":
        data = request.get_json()
        print(data['location'],data['service'],data['lattitude'],data['longitude'],data['pet'])
        vendors = getVendor(data['location'],data['service'],data['lattitude'],data['longitude'],data['pet'])
        return jsonify(vendors)


def getVendor(location,service,lattitude,longitude,pet):
    db = firestore.client()
    vendor_ref = db.collection('Vendor')
    vendor = vendor_ref.where(u'Location',u'array_contains',location).stream()
    vendors = []
    for doc in vendor:
        doc = doc.to_dict()
        if service in doc['Services'] and pet in doc['Pets']:
            vendors.append(doc)
        url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=40.6655101%2C-73.89188969999998&destinations=40.659569%2C-73.933783&key=AIzaSyArGBLH2peMqqkooSiSWa-DrAovVQ4ydeA"
        payload={}
        headers = {}
        response = requests.request("GET", url, headers=headers, data=payload)
        print(response.text.encode('utf8'))
    if(len(vendors)==0):
        vendors = None
    return vendors


if __name__ == '__main__':
    app.run(debug=True)