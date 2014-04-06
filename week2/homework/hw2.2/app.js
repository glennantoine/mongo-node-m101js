
var mongoClient = require('mongodb').MongoClient;

mongoClient.connect('mongodb://localhost:27017/weather', function(err, db) {
    if(err) throw err;

    var query = {};
    var fields = {'State': 1, 'Temperature': 1};

    //Query the collection returning the State & Temperature fields
    var cursor = db.collection('data').find(query, fields);

    //Sort by State and Temperature
    cursor.sort([['State', 1], ['Temperature', -1]]);

    var state = '';
    var operator = {'$set': {'month_high': true}};

    cursor.each(function(err, doc){
        if (err){
            console.warn(err.message);
        }

        if(doc == null){
            return db.close();

        }else if(doc.State !== state){
            //State with high temp (first record)
            state = doc.State;

            console.log('****Document to be updated ****');
            console.log(doc);
            console.log('');

            db.collection('data').update({'_id': doc._id}, operator, function(err) {
                if (err){
                    console.warn(err.message);
                }
            });
        }
    });
});