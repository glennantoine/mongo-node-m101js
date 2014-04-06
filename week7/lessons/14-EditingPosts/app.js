var mongoose = require('mongoose'),
	express = require('express'),
	routes = require('./routes'),
	jade = require('jade');
	
require('express-mongoose');	

mongoose.connect('mongodb://localhost', function(err){
	if(err) throw err;
	
	var app = express();
	routes(app);
	
	app.listen(8085, function(){
		console.log('Node.js listening on localhost 8085');
	});
});	