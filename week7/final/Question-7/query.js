//**************************************
// Usage:
// mongo < query.js > output.txt

use photoshare;
db.images.ensureIndex({_id: 1})

//Output Counts prior to DB clean up
'\nImage Count: ' + db.images.count();
'Kitten Count: ' + db.images.find({tags: 'kittens'}).count();

//Ensure there is an index on images
db.images.ensureIndex({_id: 1});

//********************************
// 
var test = db.albums.aggregate([
		{$project: {images: 1}}, 
		{$unwind: "$images"},
		{'$group':
		  {
			_id: 'images',
			images: {$addToSet: '$images'}
		  }
		},
		{$project: {_id: 0, images: 1}}
	]).result[0].images;
	
//Remove any images not found in "test" array	
db.images.remove({_id: {$nin: test}})


//Output Counts after DB clean up
'\nFinal Image Count: ' + db.images.count();
'Final Kitten Count: ' + db.images.find({tags: 'kittens'}).count();