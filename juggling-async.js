var http = require('http'),
	bl = require('bl'),
	URLS = process.argv.slice(2),
	bufArr = [];

(function getMulti(i) {
	http.get(URLS[i], function(res) {
		res.pipe(bl(function(err, data) {
			if(err) return console.error(err);
			
			bufArr.push(data);

			if(++i < URLS.length) getMulti(i);
			else{
				bufArr.forEach(function(buf) {
					console.log(buf.toString());
				});
			}
		}));
	});
})(0);