/**
 * Gets and sets profile information for logged in users
 */
var express = require('express');
var router = express.Router();

// The GET /profile route
router.get('/', function (req, res) {
    res.json({
        'user': req.user
    });
});

// Export the router for usage in our server/router/index.js
module.exports = router;