/**
 * The Index of Routes
 */

 var color = require('cli-color');

module.exports = function (app, passport) {

    app.use('/signup',  require('./routes/signup'));
    app.use('/logout',  require('./routes/logout'));
    app.use('/login',   require('./routes/login'));
    app.use('/auth',    require('./routes/auth'));
    app.use('/connect', require('./routes/connect'));
    app.use('/unlink',  require('./routes/unlink'));

    // Routes that require the user to be logged in
    app.use('/profile', isLoggedIn, require('./routes/profile'));
}

// Route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // Log the unauthorized request
    console.log('Unauthorized request to ' + color.red(req.originalUrl) + ' from ' + color.red(req.ip));
    // If they aren't redirect them to the home page
    res.status(401).json({error: 'Unauthorized'});
}