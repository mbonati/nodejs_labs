var server = require("./server");
var router = require("./route");
var exec = require("child_process").exec;

exec("ls -la", function (error, stdout, stderr) {
	console.log("Listing files...");
    console.log(stdout);
});

server.start(router.route);

