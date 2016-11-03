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
    // Verify that the user has created an avatar before they go to the profile page
    $http.get('/avatar').then(function(response) {
      if(response.data.error) {
        console.log(response.data.error);
        $location.path('/avatar');
      }
    });


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
