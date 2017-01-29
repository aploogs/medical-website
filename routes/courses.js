'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Course = require('../models/course');

router.get('/', (req, res) => {
  Course.find( (err, course) => {
    res.json(courses);
  });
});

router.get('/:id', (req, res) => {
  Course.findById(req.params.id, (err, course) => {
    res.json(course);
  });
});

router.post('/', (req, res) => {
  new Course({
    subject: req.body.subject,
    name: req.body.name,
    length: req.body.length
  }).save( (err, course) => {
    res.json(course);
  });
});

module.exports = router;
