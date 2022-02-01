import firebase_admin
from firebase_admin import credentials, firestore
import flask_cors as Cors
from flask import Flask, request, jsonify

cred = credentials.Certificate("./cred.json")
firebase_admin.initialize_app(cred)

app = Flask(__name__)
Cors.CORS(app)

@app.route('/fetchVendors', methods=['POST'])
def get_Vendors():
    data = request.get_json()
    vendors = getVendor(data['location'])
    return data



def getVendor(location):
    db = firestore.client()
    vendor_ref = db.collection('Vendor')
    vendor = vendor_ref.where(u'Location',u'array_contains',location).stream()
    vendors = []
    for doc in vendor:
        vendors.append(doc.to_dict())
    print(vendors)
    return vendors


if __name__ == '__main__':
    app.run(debug=True)