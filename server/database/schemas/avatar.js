/**
 * Our Schema for Users
 */
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

// Define the User Schema
var avatarSchema = new Schema({

    _user : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name : { type : String },
    meta : {} // For extra information

});

// The primary user model
var Avatar = mongoose.model('Avatar', avatarSchema);

module.exports = Avatar;