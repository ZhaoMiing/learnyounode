'use strict';

let fs = require('fs'),
	path = require('path'),
	reg = new RegExp('^.+\.'+ process.argv[3] +'$', 'i');

fs.readdir(process.argv[2], function(err, list) {
	if(!err) {
		list.forEach(function(name) {
			if(reg.test(name)) {
				console.log(name);
			}
			/*if(path.extname(name) === '.' + process.argv[3]) {
				console.log(name);
			}*/
		});
	}
});