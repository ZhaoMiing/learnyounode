var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, cb) {
	fs.readdir(dir, function(err, list) {
		if(err) {
			return cb(err);
		}

		list = list.filter(function(name) {
			return path.extname(name) === '.' + ext;
		});

		cb.call(null, null, list);
	});
}