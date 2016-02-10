"use strict";

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  // _id                : String,
  accessToken        : String,
  accessTokenSecret  : String,
  stringLastChecked  : String,
  friendRequests     : [],
  lastChecked        : Date,
  needsUpdate        : {type: Boolean, default: false},
  provider           : String,


});

module.exports = exports = mongoose.model('user', UserSchema);
