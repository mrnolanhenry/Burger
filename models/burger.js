let orm = require("../config/orm");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    selectWhere: function (col, value, cb) {
        // EXAMPLE QUERY STRING
        // "SELECT * FROM burgers WHERE devoured = false;"
        orm.selectWhere("burgers", col, value, function (res) {
            cb(res);
        });
    },
    insertOne: function (col1, col2, newBurgerName, cb) {
        // EXAMPLE QUERY STRING
        // "INSERT INTO burgers(burger_name,devoured) VALUES (?,?)"
        orm.insertOne("burgers", col1, col2, newBurgerName, function (res) {
            cb(res);
        });
    },
    updateOne: function (col, val, id, cb) {
        // EXAMPLE QUERY STRING
        // "UPDATE burgers SET devoured= true WHERE ?;"
        orm.updateOne("burgers", col, val, id, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;