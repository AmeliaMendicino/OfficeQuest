'use strict';

/**
 * @ngdoc directive
 * @name clientApp.directive:sprite
 * @description
 * # sprite
 */
angular.module('clientApp')
  .directive('sprite', function (grunticonEmbedConfig) {
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
      link: function postLink(scope) {
        // Set the unique id for this sprite directive
        scope.id = uniqueID++;
        // Make the hasColor function accessible to the directive scope
        scope.hasColor = hasColor;
        
        // Watch the body to see if we need to add in any extra properties to the model
        scope.$watch('model.body', function() {
            // Get all of the custom properties that we can add colors to
            var svg = grunticonEmbedConfig.gruntIcons[scope.model.body];
            // In the form data-custom-color="propertyName"
            var regex = /data-custom-color="(\w+)"/gi;
            var match = regex.exec(svg);
            while (match !== null) {
                var property = match[1];
                // Add the property to the model if it's not already there
                if(typeof scope.model[property] === 'undefined') {
                    scope.model[property] = {};
                }
                // Check if we already have the color property
                if(typeof scope.model[property].color === 'undefined') {
                    scope.model[property].color = false;
                }

                // Get the next match for the loop
                match = regex.exec(svg);
            }
        });
      },
      
      templateUrl: 'views/_sprite.html'
    };
  });
