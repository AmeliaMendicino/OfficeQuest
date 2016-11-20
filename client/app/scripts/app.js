'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/avatar', {
        templateUrl: 'views/avatar.html',
        controller: 'AvatarCtrl',
        controllerAs: 'avatar'
      })
      .when('/avatars', {
        templateUrl: 'views/avatars.html',
        controller: 'AvatarsCtrl',
        controllerAs: 'avatars'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function(grunticonEmbedConfigProvider) {
      grunticonEmbedConfigProvider.init('sprites/icons.data.svg.css');
  }).controller('HeaderController', function($scope, $location, $rootScope) {
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
    $scope.isLoggedIn = function () {
        return !!$rootScope.userData;
    };
  });
