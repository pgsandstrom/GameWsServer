var http = require('http');
var url = require('url');
var game = require('./game.js');

var server = http.createServer(function (request, response) {

	var url_parts = url.parse(request.url, true);

	var acao = "*";
	switch (url_parts.pathname) {
		case '/':
			response.writeHead(200, {"Content-Type": "text/plain", 'Access-Control-Allow-Origin': acao});
			response.end("Hello. Please do stuff");
			break;
		case '/play':
		case '/test':
			var query = url_parts.query;
			var data = game.find(query);
			response.writeHead(200, {"Content-Type": "text/plain", 'Access-Control-Allow-Origin': acao});
			response.end(data);
			break;
		default:
			response.writeHead(200, {"Content-Type": "text/plain", 'Access-Control-Allow-Origin': acao});
			response.end("Stuff not recognized\n");
			break;
	}
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");