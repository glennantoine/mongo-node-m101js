# Queries with Dot Notation

[Dot Notation](http://docs.mongodb.org/manual/core/document/)
MongoDB uses the dot notation to access the elements of an array and to access the fields of a subdocument.

To access an element of an array by the zero-based index position, concatenate the array name with the dot (.) and
zero-based index position, and enclose in quotes:

'<array>.<index>'

To access a field of a subdocument with dot-notation, concatenate the subdocument name with the dot (.) and the field
name, and enclose in quotes:


## Subdocuments

When the field holds an embedded document (i.e. subdocument), you can either specify the entire subdocument as the value
of a field, or “reach into” the subdocument using dot notation, to specify values for individual fields in the
subdocument:
Exact Match on Subdocument

To specify an equality match on the whole subdocument, use the query document { <field>: <value> } where <value> is the
subdocument to match. Equality matches on a subdocument require that the subdocument field match exactly the specified
<value>, including the field order.

In the following example, the query matches all documents where the value of the field producer is a subdocument that
contains only the field company with the value 'ABC123' and the field address with the value '123 Street', in the
exact order:

db.inventory.find(
                   {
                     producer: {
                                 company: 'ABC123',
                                 address: '123 Street'
                               }
                   }
                 )

Equality Match on Fields within Subdocument

Equality matches for specific fields within subdocuments select the documents in the collection when the field in the
subdocument contains a field that matches the specified value.

In the following example, the query uses the dot notation to match all documents where the value of the field producer
is a subdocument that contains a field company with the value 'ABC123' and may contain other fields:

db.inventory.find( { 'producer.company': 'ABC123' } )




==============================
Suppose a simple e-commerce product catalog called catalog with documents that look like this:
{ product : "Super Duper-o-phonic",
  price : 100000000000,
  reviews : [ { user : "fred", comment : "Great!" , rating : 5 },
              { user : "tom" , comment : "I agree with Fred, somewhat!" , rating : 4 } ],
  ... }
Write a query that finds all products that cost more than 10,000 and that have a rating of 5 or better.

db.catalog.find({price: {$gt: 10000}, "reviews.rating": {$gte: 5}});