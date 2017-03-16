var express = require('express')
var exphbs = require('express-handlebars')
var path = require('path')

var app = express()

app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use('/static', express.static('public'));

app.get('/', function(request, response) {
	response.render('home', {
		name: 'Pai'
	})
});

app.get('/australia', function(request, response) {
	response.render('australia', {
		name: 'Pai'
	})
});

app.get('/aus_label', function(request, response) {
	response.render('aus-labeled', {
		name: 'Pai'
	})
});


app.listen(8001, function() {
	console.log("Whats on your mind?");
});

