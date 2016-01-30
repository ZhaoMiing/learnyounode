var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  var urlObj = url.parse(req.url, true),
      date = Date.parse(urlObj.query.iso),
      body;
      
  var timeObj = {
    "hour": new Date(date).getHours(),
    "minute": new Date(date).getMinutes(),
    "second": new Date(date).getSeconds()
  };

  if(/\/api\/parsetime/.test(urlObj.pathname)) {
    body = JSON.stringify(timeObj);
  }
  else if(/\/api\/unixtime/.test(urlObj.pathname)) {
    body = JSON.stringify({unixtime: date});
  }
  else{
    res.writeHeader(404);
    return res.end();
  }

  res.writeHeader(200, {contentType: 'application/json'});
  res.end(body);
});

server.listen(process.argv[2]);