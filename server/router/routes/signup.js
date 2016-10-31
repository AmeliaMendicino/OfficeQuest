/**
 * This handles the signing up of users
 */
var express = require('express');
var router = express.Router();
var passport = require('passport');

// The POST /signup route
router.post('/', function(req, res, next) {
  passport.authenticate('local-signup', function(err, user, info) {
    if (err) {
      return next(err); 
    }
    if (user === false) {
      res.status(401).json({
          'message': req.flash('signupMessage')
      });  
    }
    req.logIn(user, function(err) {
      if (err) { 
        return next(err); 
      }
      res.status(201).json({
          'message': 'Successfully created new user'
      });
    });
  })(req, res, next); 
});

// Export the router for usage in our server/router/index.js
module.exports = router;