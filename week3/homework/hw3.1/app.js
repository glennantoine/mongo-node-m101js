var mongoClient = require('mongodb').MongoClient;

mongoClient.connect('mongodb://localhost:27017/school', function(err, db) {
    if(err) throw err;

    var query = {};
    var fields = {};

    //Query the collection returning all student records
    var cursor = db.collection('students').find(query, fields);

    //Sort by selected fields
    //cursor.sort([['name', 1]]);

    var student = '';
    var operator = {};

    cursor.each(function(err, doc){
        var lowScore = 0,
            item = '',
            remove;

        if (err){
            console.warn(err.message);
        }

        if(doc == null){
            return db.close();

        }else if(doc.name !== student){
            //Current Student Record
            student = doc.name;

            doc.scores.forEach(function(element, index, array){
                if(element.type === 'homework' && ( !lowScore || element.score < lowScore)){
                    lowScore = element.score;
                    item = index;
                }
            });

            //***************************************
            //There are two options here:
            //The first uses slice to copy out the array object to be removed
            //The second uses splice to physically remove the array object
            if(item !== ''){

                //Option 1: ensure to comment out option 2 to use
                remove = doc.scores.slice(item, item+1)[0];

                //Option 2: ensure to comment out option 1 to use
//                doc.scores.splice(item, 1);
            }

            console.log('**** Document to be updated ****');
            console.log(doc);
            console.log('');

            //*****************************************************************************************
            //Option 1: Uncomment below to use option one as only the identified object will be removed
            //from the array using the mongo "pull" command for modification of an array.
            //Note: be sure to comment out option 1 above.
            //
            db.collection('students').update({'_id': doc._id}, {$pull:{scores: remove}}, {safe:true}, function(err) {
                if (err){
                    console.warn(err.message);
                }
            });

            //*****************************************************************************************
            //Option 2: Uncomment below to use option two as a complete document update is required
            //Note: be sure to comment out option 1 above.
            //
//            db.collection('students').update({'_id': doc._id}, doc, operator, function(err) {
//                if (err){
//                    console.warn(err.message);
//                }
//            });
        }
    });
});