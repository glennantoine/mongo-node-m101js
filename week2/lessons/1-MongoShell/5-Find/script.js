
db.scores.find({type: "essay", score: 50}, {"_id": false, "student": true});