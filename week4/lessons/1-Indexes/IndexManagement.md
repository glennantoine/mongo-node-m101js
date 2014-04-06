# Return a List of All Indexes

When performing maintenance you may want to check which indexes exist on a collection. Every index on a collection has a corresponding document in the system.indexes collection, and you can use standard queries (i.e. find()) to list the indexes, or in the mongo shell, the getIndexes() method to return a list of the indexes on a collection, as in the following examples.

See also Index Concepts and Indexing Tutorials for more information about indexes in MongoDB and common index management operations.

## List all Indexes on a Collection
To return a list of all indexes on a collection, use the db.collection.getIndexes() method or a similar method for your driver.

For example, to view all indexes on the people collection:
db.people.getIndexes()


## List all Indexes for a Database
To return a list of all indexes on all collections in a database, use the following operation in the mongo shell:

db.system.indexes.find()
See system.indexes for more information about these documents.

## Rebuild Indexes
If you need to rebuild indexes for a collection you can use the db.collection.reIndex() method to rebuild all indexes on a collection in a single operation. This operation drops all indexes, including the _id index, and then rebuilds all indexes.


[MongoDB Indexing Tutorials](http://docs.mongodb.org/manual/administration/indexes/)