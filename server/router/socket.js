var passportSocketIo = require("passport.socketio");
var sessionSettings  = require('../config/session');
var color            = require('cli-color');

module.exports = function (io) {
	sessionSettings.success = onAuthorizeSuccess;
	sessionSettings.fail    = onAuthorizeFail;

	function onAuthorizeSuccess(data, accept){
		accept();
	}

	function onAuthorizeFail(data, message, error, accept){
		// Fatal Error
		if(error)  throw new Error(message);
		// Send the (not-fatal) error-message to the client and deny the connection
		return accept(new Error(message));
	}

	io.use(passportSocketIo.authorize(sessionSettings));

	io.on('connection', function(socket){
		var userId = socket.request.user.id;
		var clientIp = socket.request.connection.remoteAddress;
        console.log(color.yellow('Socket.io Connect: ') + 'User ID ' + color.green(userId) + ' connected from ' + color.blue(clientIp));
		
		socket.on('chat message', function(msg){
			io.emit('chat message', msg);
		});

		socket.on('disconnect', function(){
			console.log(color.yellow('Socket.io Disconnect: ') + 'User ID ' + color.green(userId) + ' disconnected');
		});
	});
}