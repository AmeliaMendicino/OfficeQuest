'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AvatarsCtrl
 * @description
 * # AvatarsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AvatarsCtrl', function ($http) {
    var avatars = this;
    avatars.all = [];

    $http.get('/avatar/all').then(function(response) {
    	avatars.all = response.data;
    	console.log(response);
    }, function(data){
    	if (data.status === 401) {
    		avatars.error = 'Please log in to see avatars!';
    	}
    });
  });
