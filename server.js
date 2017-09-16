var http = require('http');
var express = require('express');
var path = require('path');

var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'public')));

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});
