'use strict';

var net = require('net'),
    strftime = require('strftime');

var server = net.createServer(function(socket) {
  socket.write(strftime('%F %H:%M', new Date()));
  socket.end('\n');
});

server.listen(+process.argv[2]);