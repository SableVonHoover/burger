// Import MySQL connection.
var connection = require("../config/connection.js");


var orm = {
    selectAll: function (table, cb) {
        var query = "SELECT * FROM ??;";
        connection.query(query, table, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (table, col, val, cb) {
        var query = "INSERT INTO ?? (??) VALUES (?);";
        connection.query(query, [table, col, val], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function (table, col, val, condition, cb) {
        var query = `UPDATE ?? SET ??=? WHERE ${condition};`;
        connection.query(query, [table, col, val], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}

module.exports = orm;