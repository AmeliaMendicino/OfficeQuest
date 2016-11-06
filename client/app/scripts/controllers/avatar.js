'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AvatarCtrl
 * @description
 * # AvatarCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AvatarCtrl', function (grunticonEmbedConfig) {
    var avatar;
    var bodies = [];
    angular.forEach(grunticonEmbedConfig.gruntIcons, function(value, key) {
        // Grab all of the body icons out of the grunticons
        if(key.endsWith('_body')) {
            this.push(key);
        }
    }, bodies);

    avatar = this;
    avatar.sprite = bodies[0];
  });
