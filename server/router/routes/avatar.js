/**
 * Gets and sets character avatar settings for users
 */
var express = require('express');
var router = express.Router();

// Load up the user and avatar models
var db = require('../../database');
var User = db.users;
var Avatar = db.avatars;

// The GET /avatar route
router.get('/', function (req, res) {
    Avatar.findOne({ _user : req.user.id }, function(err, avatar) {
        if (err)
            return next(err);
        if (!avatar)
            return res.json({error : 'No avatar found'});

        res.json(avatar);
    });
});

// The POST /avatar route for creating a new avatar for the logged in user
router.post('/', function(req, res) {
    req.body._user = req.user.id;
    var avatar = new Avatar(req.body);
    avatar.save(function(err) {
        if (err)
            return next(err);
        res.json(avatar);
    });
});

// The GET /all route
router.get('/all', function (req, res) {
    Avatar.find({}, function(err, avatar) {
        if (err)
            return next(err);
        if (!avatar)
            return res.json({error : 'No avatar found'});

        res.json(avatar);
    });
});

// Export the router for usage in our server/router/index.js
module.exports = router;