#Querying Using $gt and $lt

Which of these finds documents with a score between 50 and 60, inclusive?
db.scores.find({ score : { $gte : 50 , $lte : 60 } } );