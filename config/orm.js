let connection = require("./connection");

let orm = {
    selectAll: function (table,cb) {
        let queryString = "SELECT * FROM " + table;
        connection.query(queryString,
            function (err, res, fields) {
                if (err) throw err;
                cb(res);
            })
    },

    selectWhere: function (table,col,value,cb) {
        let queryString = "SELECT * FROM " + table;
        queryString += "WHERE " + col + " = " + value;
        connection.query(queryString,
            function (err, res, fields) {
                if (err) throw err;
                cb(res);
            })
    },

    insertOne: function (table, col1, col2, newBurgerName, cb) {
        let queryString = "INSERT INTO " + table;
        queryString += "(" + col1 + "," + col2 + ") VALUES (?,?)";
        connection.query(queryString, [newBurgerName, false],
            function (err, res, fields) {
                if (err) throw err;
                cb(res);
            })
    },

    updateOne: function (table,col,val, id, cb) {
        let queryString = "UPDATE " + table;
        queryString += " SET " + col + " = " + val + " WHERE ?";

        connection.query(queryString,
            { id: id },
            function (err, res, fields) {
                if (err) throw err;
                cb(res);
            })
    }

}

module.exports = orm;