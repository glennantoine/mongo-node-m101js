# Querying Inside of Arrays

[db.collection.find()](http://docs.mongodb.org/manual/reference/method/db.collection.find/#db.collection.find)
Query a Field that Contains an Array

If a field contains an array and your query has multiple conditional operators, the field as a whole will
match if either a single array element meets the conditions or a combination of array elements meet the conditions.

Given a collection students that contains the following documents:

{ "_id" : 1, "score" : [ -1, 3 ] }
{ "_id" : 2, "score" : [ 1, 5 ] }
{ "_id" : 3, "score" : [ 5, 5 ] }

The following query:

db.students.find( { score: { $gt: 0, $lt: 2 } } )

Matches the following documents:

{ "_id" : 1, "score" : [ -1, 3 ] }
{ "_id" : 2, "score" : [ 1, 5 ] }

In the document with _id equal to 1, the score: [ -1, 3 ] meets the conditions because the element -1 meets the $lt: 2
condition and the element 3 meets the $gt: 0 condition.

In the document with _id equal to 2, the score: [ 1, 5 ] meets the conditions because the element 1 meets both the
$lt: 2 condition and the $gt: 0 condition.



