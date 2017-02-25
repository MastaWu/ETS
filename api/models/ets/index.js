// GET all restaurants
var ets = require('express').Router();
var getAllTimes = require('./getAllTimes');
var getTime = require('./getTime');
var postTime = require('./postTime');

// Get all times available from the database
ets.get('/all', getAllTimes);

// Retrieve the time from the database with id from req.params
ets.get('/:id', getTime);

// Post the time to the database with parameters from req.body
ets.post('/', postTime);

module.exports = ets;