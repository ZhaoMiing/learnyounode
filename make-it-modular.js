var fn = require('./modules/exercise6');

fn(process.argv[2], process.argv[3], function(err, list) {
	if(err){
		return console.error(err);
	}
	
	list.forEach(function(name) {
		console.log(name);
	});
});