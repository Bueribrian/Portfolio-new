"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const timestamp = require('mongoose-timestamp')
const UserSchema = Schema({
  username:{
      type: String,
      require: true,
      trim: true
  } , 
  password: {
    type: String,
    require: true,
}
});
UserSchema.plugin(timestamp)
module.exports = mongoose.model("User", UserSchema);
