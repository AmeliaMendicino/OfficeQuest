'use strict';

// Utility
function arrayIntersection(array1, array2) {
    return array1.filter(function(n) {
        return array2.indexOf(n) !== -1;
    });
}

/**
 * @ngdoc directive
 * @name clientApp.directive:grunticonEmbed
 * @description
 * # grunticonEmbed
 */

/* globals grunticon: false */
angular.module('clientApp')
    .provider('grunticonEmbedConfig', function() {
        this.gruntIcons = undefined;

        this.init = function(grunticonCss) {
            var css = grunticon.getCSS(grunticonCss);
            css = css ? css : window.document.querySelector('[data-grunticon-css]');

            if (css) {
                this.gruntIcons = {};
                
                var icons = grunticon.getIcons(css);
                Object.keys(icons).forEach(function(key) {
                    var selector = key.slice('grunticon:.'.length);
                    this.gruntIcons[selector] = icons[key];
                }, this);
            }
        };

        this.$get = function() {
            return this;
        };
    })
    .directive('grunticonEmbed', function($log, grunticonEmbedConfig) {
    	function embedIcon(element) {
            if (grunticonEmbedConfig.gruntIcons) {
                var classListArray = element[0].classList.toString().split(' ');
                var icons = arrayIntersection(classListArray, Object.keys(grunticonEmbedConfig.gruntIcons));

                if (icons.length === 1) {
                    element[0].innerHTML = grunticonEmbedConfig.gruntIcons[icons[0]];
                    element[0].style.backgroundImage = 'none';
                }
            } else {
                $log.error('Grunticon CSS not configured! please use ' +
                    '\'grunticonEmbedConfigProvider.init()\' to configure.');
            }
        }
        
        return {
            restrict: 'A',
            scope: {
                grunticonEmbed: '@'
            },
            controller: function($scope, $element) {
                $scope.$watch('grunticonEmbed', function(newClass, oldClass) {
                    if (oldClass) {
                        $element.removeClass(oldClass);
                    }

                    if (newClass) {
                        $element.addClass(newClass);
                    }
                    
                    embedIcon($element);
                });
            }
        };
    });
