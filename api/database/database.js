// This sets up database so that our queries to the database are cleaner.
module.exports = (function(){
    'use strict';

    var mysql    = require('mysql');
    var databaseConfig = require('../config/config');
    var database = {
        initDB : initDB,
        query : query,
        disconnect : disconnect,
        connection : connection
    };

    function initDB(databaseConfig) {
        console.log(databaseConfig.database.host);
        
        global.pool = mysql.createPool ({
            connectionLimit: 100,
            host: databaseConfig.database.host,
            port: databaseConfig.database.port,
            user: databaseConfig.database.user,
            password: databaseConfig.database.password,
            database: databaseConfig.database.database,
            dateStrings: true
        });
    }

    function query(query, callback) {
        global.pool.getConnection(function(err, connection) {
            if(err) {
                console.log(err);
                throw err;
            }

            console.log('Using database pool, currently using: ' + connection.threadId);

            connection.query(query, function (err, res)
            {
                if(err) {
                    console.log(err);
                    console.log("There was an error querying the database.");
                }
                callback(res);
            });

            connection.on('error', function(err, res) {
                res.json(
                    {
                        "code": 100,
                        "status": "Error in connection to database"
                    }
                );
                console.log(err);
                console.log("Attempting to restart connection to database");
                initDB();
                return;
            });
        });
    }

    function disconnect() {
        if (global.pool) {
            console.log("Disconnecting from database.");
            global.pool.end();
        }
    }

    function connection() {
        if(global.pool) {
            console.log("Grabbing pool connection.");
            return global.pool;
        }
    }

    return database;
})();
