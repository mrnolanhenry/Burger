let connection = require("./connection");

// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//   * `selectAll()`
//   * `insertOne()`
//   * `updateOne()`

// * Export the ORM object in `module.exports`.

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

    insertOne: function (newBurgerName, cb) {
        connection.query("INSERT INTO burgers(burger_name,devoured) VALUES (?,?)", [newBurgerName, false],
            function (err, res, fields) {
                if (err) throw err;
                cb(res);
            })
    },

    updateOne: function (newBurgerName, id, cb) {
        connection.query("UPDATE burgers SET burger_name = " + newBurgerName + ", devoured= true WHERE ?;",
            { id: id },
            function (err, res, fields) {
                if (err) throw err;
                cb();
            })
    }

}

module.exports = orm;