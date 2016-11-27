'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ChatCtrl', function ($scope, socketIO) {
  	var chat = this;

  	chat.messages = [];
  	socketIO.on('chat message', function(msg) {
  		chat.messages.push(msg);
  	});

    var authError = 'User not authorized through passport.';
    $scope.$on('socket:error', function (ev, data) {
      if (data.startsWith(authError)) {
        chat.error = 'Please log in to access chat.';
      } else {
        chat.error = data;
      }
    });

  	chat.message = '';
  	chat.sendMessage = function () {
  		var socket = socketIO.emit('chat message', chat.message);
      if(socket.disconnected) {
        // TODO: Log back in again?
        chat.error = 'You have been disconnected. If you are logged in, please refresh the page.';
      } else {
        chat.message = '';
      }
  	};
  });
