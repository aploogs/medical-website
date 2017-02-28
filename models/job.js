'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Job = new Schema({
  title: String,
  location: String,
  description: String
});

module.exports = mongoose.model('Job', Job);
