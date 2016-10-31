'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ProfileCtrl', function ($http, $location) {

  	var profile = this;

    var request = $http.get('/profile');

    request.success(function(data) {
		console.log(data);
		profile.user = data.user;
    });

    request.error(function() {
    	$location.path('/login');
    });

  });
