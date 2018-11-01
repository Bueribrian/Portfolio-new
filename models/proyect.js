"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const timestamp = require('mongoose-timestamp')
const ProjectSchema = Schema({
  title:String,  
  imgUrl: String,
  tags: [String],
  description: String
});
ProjectSchema.plugin(timestamp)
module.exports = mongoose.model("Project", ProjectSchema);
