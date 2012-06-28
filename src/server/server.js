var http = require("http");
var url = require("url");

function start(route) {
  
  var port = 8080;

	console.log("Starting Simple server...");

  function onRequest(request, response) {
    console.log("Request received.");
    var pathname = url.parse(request.url).pathname;

    route(pathname); 

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(port);
  console.log("Simple server has started. Listening on port "+ port);
}

exports.start = start;