var express                                 = require('express');
var app                                     = express();
var bodyParser                              = require('body-parser');
var morgan                                  = require('morgan');
var appConfig                               = require('./config/config');
var database                                = require('./database/database');
var port                                    = 8080;

// Initiate database pool connection
database.initDB(appConfig);

// Setting up bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Log all requests to the console
app.use(morgan('dev'));

// Configure app to handle CORS requests
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
    next();
});

// Register all apps to the api route.
var routes = require('./routes');
app.use('/api', routes);

// START SERVER
app.listen(port);
console.log('Server has started at port: ' + port + ' \nDate: ' + new Date());

module.exports = app;
