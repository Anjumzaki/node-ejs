// load the things we need
var express = require('express');
var favicon = require('serve-favicon');

var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
	res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
	res.render('pages/about');
});

app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.listen(process.env.PORT || 5000)
console.log('8080 is the magic port');