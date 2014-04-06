module.exports = function(app){
	
	//Default Route, Home page
	app.get('/', function(req, res){
		res.render('home.jade');
	});

}