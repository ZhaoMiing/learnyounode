'use strict';

let fs = require('fs'),
	/*buf = fs.readFileSync(process.argv[2]),
	content = buf.toString()*/
	content = fs.readFileSync(process.argv[2], 'utf8');

console.log(content.split('\n').length - 1);