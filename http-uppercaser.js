var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(req, res) {
  res.writeHeader(200, {contentType: 'text/plain'});

  if(req.method !== 'POST'){
    return res.end('method error');
  }
  req.pipe(map(function(chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(res);  
});

server.listen(process.argv[2]);