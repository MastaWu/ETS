// GET time where id is given from request parameters
module.exports = function postTime(req, res) {
    var database = require('../../database/database');
    var queryValues = [];

    // req.param is used for get methods
    userValues = [];

    userValues.push(req.body.ets.user);

    var selectUserQuery = {
        sql: "SELECT * from ets.user where user_name = ?;",
        values: userValues
    };

    database.query(selectUserQuery, function(userResult) {

        queryValues.push(userResult.user_name);
        queryValues.push(req.body.ets.chargline);
        queryValues.push(Date(req.body.ets.chargeDate));
        queryValues.push(req.body.ets.timeCharge);
        queryValues.push(req.body.ets.comment)

        if (userResult.user_name != null) {
            var postTimeQuery = {
                sql: "INSERT INTO ets.timecharge (user_id, chargeline, timecharge_date, timeCharge, comment) VALUES (?, ?, ?, ?, ?);",
                values: queryValues
            };

            database.query(postTimeQuery, function (timeResults) {
                console.log(results);
                res.status(200).json(results);
            });
        } else {
            res.status(999).json({
                msg: "Sorry."
            });
        }
    });
};

