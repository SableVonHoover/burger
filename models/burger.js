var orm = require("../config/orm.js");
// var mysql = require("mysql");

var burger = {
    all: function (cb) {
        orm.selectAll("burgers", cb);
    },
    create: function (col, val, cb) {
        orm.insertOne("burgers", col, val, cb);
    },
    update: function (col, val, condition, cb) {
        orm.updateOne("burgers", col, val, condition, cb);
    }
}

module.exports = burger;