#Query Using $and

What will the following query do?
db.scores.find( { score : { $gt : 50 }, score : { $lt : 60 } } );

Find all documents with a score of less than 60


