/**
 * Gets and sets character avatar settings for users
 */
var express = require('express');
var router = express.Router();

// Load up the user and avatar models
var db = require('../../database');
var User = db.users;
var Avatar = db.avatars;

// TODO: Take this out after development
var color = require('cli-color');

// The GET /profile route
router.get('/', function (req, res) {
    Avatar.findOne({ _user : req.user.id }, function(err, avatar) {
         // if there are any errors, return the error
        if (err)
            return res.json({ error : err });

        // if no user is found, return the message
        if (!avatar)
            return res.json({ error : 'No avatar found' });

        else
            return res.json(avatar);
    });
});

// Export the router for usage in our server/router/index.js
module.exports = router;