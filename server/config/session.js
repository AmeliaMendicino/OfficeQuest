var session    = require('express-session');
var MongoStore = require('connect-mongo')(session);
var database   = require('../database');

var sessionSettings = {
    secret:'slay the beasts',
    resave: false,
    saveUninitialized: false,
    maxAge: new Date(Date.now() + 3600000), // 1 hour
    store: new MongoStore({mongooseConnection: database.connection})
};

module.exports = sessionSettings;