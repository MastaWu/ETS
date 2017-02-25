var routes = require('express').Router();

var timesheet = require('../models/ets/index');

routes.use('/ets', timesheet);

module.exports = routes;

