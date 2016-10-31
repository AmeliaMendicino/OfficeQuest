/**
 * This handles the connecting of accounts for users
 */
var express = require('express');
var router = express.Router();
var passport = require('passport');

// Locally --------------------------------
router.get('/local', function(req, res) {
    res.render('connect-local.ejs', { message: req.flash('loginMessage') });
});
router.post('/local', passport.authenticate('local-signup', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/#/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

// Facebook -------------------------------

// Send to facebook to do the authentication
router.get('/facebook', passport.authorize('facebook', { scope : 'email' }));

// Handle the callback after facebook has authorized the user
router.get('/facebook/callback',
    passport.authorize('facebook', {
        successRedirect : '/#/profile',
        failureRedirect : '/'
    }));

// Twitter --------------------------------

// Send to twitter to do the authentication
router.get('/twitter', passport.authorize('twitter', { scope : 'email' }));

// Handle the callback after twitter has authorized the user
router.get('/twitter/callback',
    passport.authorize('twitter', {
        successRedirect : '/#/profile',
        failureRedirect : '/'
    }));


// Google ---------------------------------

// Send to google to do the authentication
router.get('/google', passport.authorize('google', { scope : ['profile', 'email'] }));

// The callback after google has authorized the user
router.get('/google/callback',
    passport.authorize('google', {
        successRedirect : '/#/profile',
        failureRedirect : '/'
    }));

// Export the router for usage in our server/router/index.js
module.exports = router;