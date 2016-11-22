var color = require('cli-color');

module.exports = function (io) {
	io.use(function(socket, next){
		if (socket.request.headers.cookie) return next();
		next(new Error('Authentication error'));
	});

	io.on('connection', function(socket){
		var clientIp = socket.request.connection.remoteAddress;
		console.log('New connection from ' + color.blue(clientIp));
		
		socket.on('chat message', function(msg){
			io.emit('chat message', msg);
		});

		socket.on('disconnect', function(){
			console.log('User disconnected');
		});
	});
}