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
            var regex = /data-custom-color="(\w+)-?(\w*)"/gi;
            var match = regex.exec(svg);
            while (match !== null) {
                // TODO: Break these up into functions or something. This looks terrible.
                var property = match[1];
                // Add the property to the model if it's not already there
                if(typeof scope.model[property] === 'undefined') {
                    scope.model[property] = {};
                }
                // Check if we already have the color property
                if(typeof scope.model[property].color === 'undefined') {
                    scope.model[property].color = false;
                }

                // Check if this is an option for the styles
                if(match[2]) {
                    // Create the styles array if it's not already there
                    if(typeof scope.model[property].styles === 'undefined') {
                        scope.model[property].styles = [];
                    }
                    // Check if we already have this style in the styles
                    if (scope.model[property].styles.indexOf(match[2]) === -1) {
                        scope.model[property].styles.push(match[2]);
                    }
                    // Put this style as the current style if we don't have one yet
                    if(typeof scope.model[property].currentStyle === 'undefined') {
                        scope.model[property].currentStyle = match[2];
                    }
                }

                // Get the next match for the loop
                match = regex.exec(svg);
            }
            // Check all of the currentStyles to make sure that they match an option in the list
            angular.forEach(scope.model, function(value, key) {
                if(typeof value.currentStyle !== 'undefined') {
                    if(typeof scope.model[key].styles !== 'undefined' &&
                        scope.model[key].styles.indexOf(value.currentStyle) === -1) {
                        value.currentStyle = scope.model[key].styles[0];
                    }
                }
            });
        });
      },
      
      templateUrl: 'views/_sprite.html'
    };
  });
