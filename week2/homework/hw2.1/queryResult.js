
db.data.find({"Wind Direction": {$gt: 180, $lt:360}}).sort({"Temperature": 1}).limit(1).pretty()


{
        "_id" : ObjectId("52e650fd3bf96d2eb76087e3"),
        "Day" : 24,
        "Time" : 153,
        "State" : "New Mexico",
        "Airport" : "SAF",
        "Temperature" : 0,
        "Humidity" : 87,
        "Wind Speed" : 5,
        "Wind Direction" : 260,
        "Station Pressure" : 23.88,
        "Sea Level Pressure" : 274
}

