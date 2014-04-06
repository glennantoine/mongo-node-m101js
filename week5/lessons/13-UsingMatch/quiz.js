
Quiz: $match

Again, thinking about the zipcode collection, write an aggregation query with a single match phase that filters for zipcodes with greater than 100,000 people. You may need to look up the use of the $gt operator in the MongoDB docs. 
http://docs.mongodb.org/manual/reference/operator/
http://docs.mongodb.org/manual/reference/operator/query/gt/#op._S_gt

Assume the collection is called zips.
db.zips.aggregate([{$match:{pop:{$gt:100000}}}])