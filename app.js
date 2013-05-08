var express = require('express');
var http = require('http');
var path = require('path');
var middleware = require('./source/middleware');

var app = express();

app.configure(function(){
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
	app.use(express.errorHandler());
	app.use(middleware.serveMaster.development());
});

app.configure('production', function(){
	app.use(middleware.serveMaster.production());
});

// api endpoinds
require('./source/api/emails')(app);
require('./source/api/contacts')(app);
require('./source/api/tasks')(app);

http.createServer(app).listen(app.get('port'), function(){
	console.log('SPA boilerplate started: ' + app.get('port') + ' (' + process.env.NODE_ENV + ')');
});
