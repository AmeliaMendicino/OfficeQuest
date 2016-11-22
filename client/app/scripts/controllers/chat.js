'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ChatCtrl', function (socketIO) {
  	var chat = this;

  	chat.messages = [];
  	socketIO.on('chat message', function(msg) {
  		chat.messages.push(msg);
  	});

  	chat.message = '';
  	chat.sendMessage = function () {
  		socketIO.emit('chat message', chat.message);
  		chat.message = '';
  	};
  });
