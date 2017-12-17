/*
	Basic server how-to in NodeJS
	This will cover creating a basic file server that can be used 
	to create templates and serve basic HTML pages

*/

var http = require('http');
var fs = require('fs');

function send404(response) {
	response.writeHead(404, {
		"Context-Type" : "text/plain"
	});
	response.write("Invalid request");
	response.end();
}


// basic outline of how a server is created using the http module. 
http.createServer(function(request, response) {
	if(request.method == "GET" && request.url == "/") {
		response.writeHead(200, "text/html");
		fs.createReadStream("./index.html").pipe(response);
	}
	else 
		send404(response);console.log(request.url);
	
}).listen(8080);

console.log("Server is running");