var io = require('socket.io');

var find = function (parameters) {

	console.log("parameters: " + JSON.stringify(parameters));

	var game = parameters.game;

	if (game === undefined) {
		return "wtf plox";
	}

	console.log("resultAsString: " + game.length);
	return game;
};


exports.find = find;