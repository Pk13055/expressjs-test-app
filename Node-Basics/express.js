var express = require('express');
var http = require('http');
var fs = require('fs');

var app = express();


app.use('/profile', function(request, response, next) {
	console.log("Requested profile page");
	response.writeHead(200, {
		"Context-Type" : "text/plain"
	});
});

app.use('/', function(request, response, next) {
	response.writeHead(200, {
		"Context-Type" : "text/html"
	});
	fs.createReadStream('./index.html').pipe(response);
});

http.createServer(app).listen(8080);
console.log("Server is running ...");