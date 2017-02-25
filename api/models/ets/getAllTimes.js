// GET all times where id is given from request parameters
module.exports = function getTime(req, res) {
    var database = require('../../database/database');
    var queryValues = [];

    var getAllTimesQuery = {
        sql: "SELECT * FROM timecharge;"
    };

    database.query(getAllTimesQuery, function(results) {
        console.log(results);
        res.status(200).json(results);
    });
};
