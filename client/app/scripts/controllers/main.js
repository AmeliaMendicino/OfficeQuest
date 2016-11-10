'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($http) {
  	var main = this;

    // Check if they're already logged in
    var request = $http.get('/profile');
    request.success(function() {
    	main.loggedIn = true;
    });
  });
