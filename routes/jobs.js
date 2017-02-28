'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Job = require('../models/job');

router.get('/', (req, res) => {
  Job.find( (err, job) => {
    res.json(jobs);
  });
});

router.get('/:id', (req, res) => {
  Job.findById(req.params.id, (err, job) => {
    res.json(job);
  });
});

router.post('/', (req, res) => {
  new Job({
    title: req.body.subject,
    location: req.body.name,
    description: req.body.length
  }).save( (err, job) => {
    res.json(job);
  });
});

module.exports = router;
