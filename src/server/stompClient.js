var util = require("util"),
  stomp = require("./stomp");

var client = new stomp.Client("localhost", 61613);
client.subscribe("/queue/news", function(data){
  console.log("On message: " + data);
  //sys.puts(data.body);
});

