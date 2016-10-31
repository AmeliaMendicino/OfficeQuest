/**
 * This handles the logging out of users
 */
var express = require('express');
var router = express.Router();

// The GET /profile route
router.get('/', function (req, res) {
    req.logout();
    res.redirect('/');
});

// Export the router for usage in our server/router/index.js
module.exports = router;