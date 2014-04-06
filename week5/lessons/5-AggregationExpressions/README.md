# Aggregation Expressions
[$group Aggregation Docs](http://docs.mongodb.org/manual/reference/operator/aggregation/group/)

Every $group expression must specify an _id field. 
In addition to the _id field, $group expression can include computed fields. 
These other fields must use one of the following accumulators:
$sum
$avg
$min
$max
$push
$addtoset
$first
$last

$addToSet 
    Returns an array of all the values found in the selected field among the documents in that group. Every unique value only appears once in the result set. There is no ordering guarantee for the output documents.
	[MongoDB Docs](http://docs.mongodb.org/manual/reference/operator/aggregation/addToSet/)

$first 
    Returns the first value it encounters for its group	
	Note: Only use $first when the $group follows a $sort operation. Otherwise, the result of this operation is unpredictable.
	[MongoDB Docs](http://docs.mongodb.org/manual/reference/operator/aggregation/first/)

	
$last ¶
    Returns the last value it encounters for its group.
	Note: Only use $last when the $group follows an $sort operation. Otherwise, the result of this operation is unpredictable.
	[MongoDB Docs](http://docs.mongodb.org/manual/reference/operator/aggregation/last/)

$max 
    Returns the highest value among all values of the field in all documents selected by this group.
	[MongoDB Docs](http://docs.mongodb.org/manual/reference/operator/aggregation/max/)

$min 
    The $min operator returns the lowest non-null value of a field in the documents for a $group operation.
	If some, but not all, documents for the $min operation have either a null value for the field or are missing the field, the $min operator only considers the non-null and the non-missing values for the field. If all documents for the $min operation have null value for the field or are missing the field, the $min operator returns null for the minimum value.
	[MongoDB Docs](http://docs.mongodb.org/manual/reference/operator/aggregation/min/)

$avg 
    Returns the average of all the values of the field in all documents selected by this group.
	[MongoDB Docs](http://docs.mongodb.org/manual/reference/operator/aggregation/avg/)

$push 
    Returns an array of all the values found in the selected field among the documents in that group. A value may appear more than once in the result set if more than one field in the grouped documents has that value.
	[MongoDB Docs](http://docs.mongodb.org/manual/reference/operator/aggregation/push/)
	

$sum 
    Returns the sum of all the values for a specified field in the grouped documents, as in the second use above.
    Alternately, if you specify a value as an argument, $sum will increment this field by the specified value for every document in the grouping. Typically, as in the first use above, specify a value of 1 in order to count members of the group.
	[MongoDB Docs](http://docs.mongodb.org/manual/reference/operator/aggregation/sum/)

	
	
	




	
	
