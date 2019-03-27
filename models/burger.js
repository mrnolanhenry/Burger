let orm = require("../config/orm");

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file.

// orm.selectAll();

var burger = {
    selectAll: function (cb) {
      orm.selectAll("burgers", function (res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    selectWhere: function (col,value,cb) {
        // "SELECT * FROM burgers WHERE devoured = false;"
      orm.selectWhere("burgers", col, value, function (res) {
        cb(res);
      });
    },
    insertOne: function (col1, col2, newBurgerName, cb) {
        // "INSERT INTO burgers(burger_name,devoured) VALUES (?,?)"
      orm.insertOne("burgers", col1, col2, newBurgerName, function (res) {
        cb(res);
      });
    },
    updateOne: function (col,val, id, cb) {
        // "UPDATE burgers SET devoured= true WHERE ?;"
      orm.updateOne("burgers", col,val, id, function (res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (burgers_controller.js).
  module.exports = burger;