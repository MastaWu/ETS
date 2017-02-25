// GET all times where id is given from request parameters
module.exports = function getTime(req, res) {
    var database = require('../../database/database');
    var queryValues = [];
    queryValues.push(req.body.ets.userId);
    queryValues.push(req.body.ets.startDate);
    queryValues.push(req.body.ets.endDate);

    var getAllTimesQuery = {
        sql: "SELECT * FROM timecharge where timecharge_date between ? and ?;"
    };

    database.query(getAllTimesQuery, function(results) {
        console.log(results);
        res.status(200).json(results);
    });
};
