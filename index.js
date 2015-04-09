#!/usr/bin/env node

module.exports = function (text) {
	if (text.length !== 0){
		console.log(text + ' あったかいんだからぁ');
	} else {
		tomaranaindakaraa();
	}
}

function tomaranaindakaraa () {
	setTimeout(function() {
		console.log('止まらないんだからぁ');
		tomaranaindakaraa();
	}, 1000);
}
