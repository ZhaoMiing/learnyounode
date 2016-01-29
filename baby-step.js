;'use strict';

let argvArr = process.argv,
	sum = 0;

argvArr.splice(0, 2);
for(let i of argvArr) {
	sum += +i;
}

console.log(sum);