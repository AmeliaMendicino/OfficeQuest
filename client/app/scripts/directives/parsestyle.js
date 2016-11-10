'use strict';

/**
 * @ngdoc directive
 * @name clientApp.directive:parseStyle
 * @description
 * # parseStyle
 * @link http://stackoverflow.com/a/18249428
 */
angular.module('clientApp')
  .directive('parseStyle', function ($interpolate) {
    return function(scope, elem) {
        var exp = $interpolate(elem.html()),
            watchFunc = function () { return exp(scope); };

        scope.$watch(watchFunc, function (html) {
            elem.html(html);
        });
    };
  });