// GET all times where id is given from request parameters
module.exports = function getTime(req, res) {
    var database = require('../../database/database');
    var queryValues = [];
    queryValues.push(req.body.user_id);
    queryValues.push(req.body.date);

    var getAllTimesQuery = {
        sql: "SELECT * FROM timecharge where user_id = ?;"
    };

    database.query(getAllTimesQuery, function(results) {
        console.log(results);
        res.status(200).json(results);
    });
};
