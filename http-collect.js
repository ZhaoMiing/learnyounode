var http = require('http');
// var bl = require('bl');
var bufList = [];

http.get(process.argv[2], function(res) {
	res.on('data', function(buf) {
		bufList.push(buf);
	}).on('end', function() {
		var str = bufList.map(function(buf) {
			return buf.toString();
		}).join('');

		console.log(str.length);
		console.log(str);
	});
});