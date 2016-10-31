'use strict';

angular.module('clientApp')
	.controller('SignupCtrl', function ($http, $location) {

		var user, signup;

		signup = this;
		user = signup.user = {};

		// This is our method that will post to our server.
		signup.submit = function () {
			
			// Make sure all fields are filled out...
			if (
				!user.email ||
				!user.password1 ||
				!user.password2
			) {
				signup.error = 'Please fill out all form fields.';
				return false;
			}

			// make sure the passwords match match
			if (user.password1 !== user.password2) {
				signup.error = 'Your passwords must match.';
				return false;
			}
			user.password = user.password1;

			// Just so we can confirm that the bindings are working
			console.log(user);

			// Make the request to the server
			var request = $http.post('/signup', user);

			request.success(function (data) {
				// to be filled in on success
				console.log(data);
				signup.error = false;
				signup.success = data.message;
				$location.path('/profile');
			});

			request.error(function (data) {
				// to be filled in on error
				console.log(data);
				if(Array.isArray(data.message)) {
					data.message = data.message.join();
				}
				signup.error = data.message;
			});
		};
		
	});