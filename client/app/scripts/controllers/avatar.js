'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AvatarCtrl
 * @description
 * # AvatarCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AvatarCtrl', function (grunticonEmbedConfig, $interval) {
    var avatar = this;
    var bodies = [];
    angular.forEach(grunticonEmbedConfig.gruntIcons, function(value, key) {
        // Grab all of the body icons out of the grunticons
        if(key.endsWith('_body')) {
            this.push(key);
        }
    }, bodies);

    avatar.sprite = {};
    avatar.sprite.body = bodies[0];
    var colors = ['red', 'purple', 'pink', 'blue', false];

    $interval(function() {
        avatar.sprite.hair = {'color' : colors[Math.floor(Math.random()*colors.length)]};
        avatar.sprite.body = bodies[Math.floor(Math.random()*bodies.length)];
    }, 5000);
  });
