#!/usr/bin/env node

module.exports = function (text) {
	if (text.length !== 0){
		console.log(text + ' あったかいんだからぁ');
	} else {
		while(true){
			console.log('止まらないんだからぁ');
		}
	}
}
