'use strict';
var http = require('http');
var fs = require('fs');
var port = process.argv[2];

var server = http.createServer(function(req, res) {
  var body = '';

  fs.createReadStream(process.argv[3]).on('data', function(chunk) {
    console.log(chunk);
    body += chunk;
  }).on('end', function() {
    res.writeHeader(200, {contentType: 'text/plain'});
    res.end(body);
  });
});

server.listen(port);