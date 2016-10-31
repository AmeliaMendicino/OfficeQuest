'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LoginCtrl', function ($http, $location) {
		var user, login;

		login = this;
		user = login.user = {};

		// This is our method that will post to our server.
		login.submit = function () {
			if (
				!user.email ||
				!user.password
			) {
				login.error = 'Please fill out all form fields.';
				return false;
			}

			// Make the request to the server
			var request = $http.post('/login', user);

			// we'll come back to here and fill in more when ready
			request.success(function (data) {
				// to be filled in on success
				console.log(data);
				login.error = false;
				login.success = data.message;
				$location.path('/profile');
			});

			request.error(function (data) {
				// to be filled in on error
				console.log(data);
				if(Array.isArray(data.message)) {
					data.message = data.message.join();
				}
				login.error = data.message;
			});
		};
		
	});