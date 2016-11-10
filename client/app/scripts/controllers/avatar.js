'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AvatarCtrl
 * @description
 * # AvatarCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AvatarCtrl', function (grunticonEmbedConfig, $http, $location) {
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

    avatar.submit = function () {
        // Check to see if a name has been inputted
        if (!avatar.name ) {
            avatar.error = '*Please put in a name for your avatar!';
            return;
        }
        // Put together object to send to server
        // TODO: Take out all the styles from the sprite properties! Dun' want those in the db...
        var avatarObj = {name: avatar.name, sprite: avatar.sprite};

        // Make the request to the server
        var request = $http.post('/avatar', avatarObj);

        request.success(function () {
            avatar.error = false;
            $location.path('/profile');
        });

        request.error(function (data) {
            avatar.error = data.error;
        });
    };
  });
