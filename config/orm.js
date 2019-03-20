let connection = require("./connection");

connection.connect(function (err) {
    if (err) throw err;
});

let orm = {
    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers;",
            function (err, res, fields) {
                if (err) throw err;
                cb(res);
            })
    },

    selectDevourable: function (cb) {
        connection.query("SELECT * FROM burgers WHERE devoured = false;",
            function (err, res, fields) {
                if (err) throw err;
                cb(res);
            })
    },

    selectDevoured: function (cb) {
        connection.query("SELECT * FROM burgers WHERE devoured = true;",
            function (err, res, fields) {
                if (err) throw err;
                cb(res);
            })
    },

    insertOne: function (newBurgerName, cb) {
        connection.query("INSERT INTO burgers(burger_name,devoured) VALUES (?,?)", [newBurgerName, false],
            function (err, res, fields) {
                if (err) throw err;
                cb(res);
            })
    },

    updateOne: function (id, cb) {
        connection.query("UPDATE burgers SET devoured= true WHERE ?;",
            { id: id },
            function (err, res, fields) {
                if (err) throw err;
                cb();
            })
    }

}

module.exports = orm;