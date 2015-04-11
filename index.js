#!/usr/bin/env node

module.exports = function (text) {
	if (text === 'みんなが思ってる私の可愛さ') {
		console.log(text + 'YES!');
		console.log('止まらないんだからぁ');
	} else if (text.length !== 0) {
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
