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
    var avatar = this;
    avatar.bodies = [];
    angular.forEach(grunticonEmbedConfig.gruntIcons, function(value, key) {
        // Grab all of the body icons out of the grunticons
        if(key.endsWith('_body')) {
            this.push(key);
        }
    }, avatar.bodies);

    avatar.sprite = {};
    avatar.sprite.body = avatar.bodies[0];

    avatar.nextBody = function () {
        // Get the current index for the body.
        var index = avatar.bodies.indexOf(avatar.sprite.body);
        index += 1;
        // Find out if we can increment or if we have to loop back around.
        if(index >= avatar.bodies.length) {
            index = 0;
        }

        avatar.sprite.body = avatar.bodies[index];
    };

    avatar.nextStyle = function (property) {
        // Cycle right through the styles of the different keys
        var index = avatar.sprite[property].styles.indexOf(avatar.sprite[property].currentStyle);
        index += 1;

        // Find out if we can increment or if we have to loop back around.
        if(index >= avatar.sprite[property].styles.length) {
            index = 0;
        }

        avatar.sprite[property].currentStyle = avatar.sprite[property].styles[index];
    };

    avatar.prevStyle = function (property) {
       // Cycle left through the styles of the different keys
        var index = avatar.sprite[property].styles.indexOf(avatar.sprite[property].currentStyle);
        index -= 1;

        // Find out if we can increment or if we have to loop back around.
        if(index < 0) {
            index = avatar.sprite[property].styles.length-1;
        }

        avatar.sprite[property].currentStyle = avatar.sprite[property].styles[index];
    };
  });
