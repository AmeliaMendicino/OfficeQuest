'use strict';

/**
 * @ngdoc filter
 * @name clientApp.filter:hasColor
 * @function
 * @description
 * # hasColor
 * Filter in the clientApp.
 */
angular.module('clientApp')
  .filter('hasColor', function () {
    return function (input) {
      var filteredInput = {};
      angular.forEach(input, function(value, key) {
      	if(typeof value.color !== 'undefined' && value.color !== false) {
      		filteredInput[key] = value;
      	}
      });
      return filteredInput;
    };
  });