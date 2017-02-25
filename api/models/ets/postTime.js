// GET time where id is given from request parameters
module.exports = function postTime(req, res) {
    var database = require('../../database/database');
    var queryValues = [];

    // req.param is used for get methods
    userValues = [];

    userValues.push(req.body.ets.user);
    queryValues.push(req.body.ets.user);
    queryValues.push(req.body.ets.chargline);
    queryValues.push(Date(req.body.ets.chargeDate));
    queryValues.push(req.body.ets.timeCharge);


    var postTimeQuery = {
        sql: "INSERT INTO ets.timecharge (user_id, chargeline, timecharge_date, timeCharge) VALUES (?, ?, ?, ?);",
        values: queryValues
    };

    database.query(postTimeQuery, function(results) {
        console.log(results);
        res.status(200).json(results);
    });
};

