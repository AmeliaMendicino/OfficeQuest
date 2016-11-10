'use strict';

/**
 * @ngdoc filter
 * @name clientApp.filter:hasProperty
 * @function
 * @description
 * # hasColor
 * Filter in the clientApp.
 */
angular.module('clientApp')
  .filter('hasProperty', function () {
    return function (input, property) {
      var filteredInput = {};
      angular.forEach(input, function(value, key) {
      	if(typeof value[property] !== 'undefined' && value[property] !== false) {
      		filteredInput[key] = value;
      	}
      });
      return filteredInput;
    };
  });