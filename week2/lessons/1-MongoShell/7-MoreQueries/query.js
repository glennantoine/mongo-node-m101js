

db.users.find({ name : { $regex : "q" }, email: {$exists: true}} );