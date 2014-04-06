//Quiz: Using $or

//How would you find all documents in the scores collection where the score is less than 50 or greater than 90?
db.scores.find( { $or : [ { score : { $lt : 50 } }, { score : { $gt : 90 } } ] } );