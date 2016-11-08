'use strict';

/**
 * @ngdoc directive
 * @name clientApp.directive:sprite
 * @description
 * # sprite
 */
angular.module('clientApp')
  .directive('sprite', function () {
  	// Each sprite needs to have a unique id to keep styles from affecting other sprites
  	var uniqueID = 1;
  	// A function for filtering on properties that have colors
  	var hasColor = function(property) {
  		return !!property.color;
  	};

    return {
      scope: {
      	model: '='
      },
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      	// Set the unique id for this sprite directive
      	scope.id = uniqueID++;
      	// Make the hasColor function accessible to the directive scope
      	scope.hasColor = hasColor;
        scope.$watch('model', function() {
        	console.log(attrs);
        });
      },
      
      templateUrl: 'views/_sprite.html'
    };
  });
