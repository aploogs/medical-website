'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Course = new Schema({
  subject: String,
  name: String,
  length: String
});

module.exports = mongoose.model('Course', Course);
