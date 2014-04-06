var mongoose = require('mongoose'),
	express = require('express');
	
mongoose.connect('mongodb://localhost', function(err){
	if(err) throw err;
	
	var app = express();
	app.get('/', function(req, res){
		res.send(200, 'Hello Mongoose Blog');
	});
	
	app.listen(8085, function(){
		console.log('Node.js listening on localhost 8085');
	});
});	