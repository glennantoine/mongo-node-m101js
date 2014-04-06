
Quiz: $sort
Again, considering the zipcode collection, which has documents that look like this,
{
	"city" : "ACMAR",
	"loc" : [
		-86.51557,
		33.584132
	],
	"pop" : 6055,
	"state" : "AL",
	"_id" : "35004"
}

Write an aggregation query with just a sort stage to sort by (state, city), both ascending. Assume the collection is called zips.

db.zips.aggregate([{$sort:{state:1, city:1}}])