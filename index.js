#!/usr/bin/env node

module.exports = function (text) {
	var word = main(text);
	if (word !== null) {
		console.log(word);
	}
}

function main(text) {
	if (text === 'みんなが思ってる私の可愛さ') {
		return text + ' YES! 止まらないんだからぁ';
	} else if (text.length !== 0) {
		return text + ' あったかいんだからぁ';
	} else {
		tomaranaindakaraa();
		return null;
	}
}

function tomaranaindakaraa () {
	setTimeout(function() {
		console.log('止まらないんだからぁ');
		tomaranaindakaraa();
	}, 1000);
}
