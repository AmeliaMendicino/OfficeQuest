'use strict';

/**
 * @ngdoc service
 * @name clientApp.socketIO
 * @description
 * # socketIO
 * Factory in the clientApp.
 */
angular.module('clientApp')
  .factory('socketIO', function (socketFactory) {
  	var mySocket = socketFactory();
	mySocket.forward('error');
	return mySocket;
  });
