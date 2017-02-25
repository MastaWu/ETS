// GET time where id is given from request parameters
module.exports = function getTime(req, res) {
    var database = require('../../database/database');
    var queryValues = [];

    // req.param is used for get methods
    queryValues.push(req.param('id'));
    console.log(queryValues);

    var getTimeQuery = {
        sql: "SELECT * FROM ETS.timecharge WHERE charge_id = ?;",
        values: queryValues
    };

    database.query(getTimeQuery, function(results) {
        console.log(results);
        res.status(200).json(results);
    });
};