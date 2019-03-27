let express = require("express");
let app = express();

let burger = require("../models/burger");

// let orm = require("../config/orm");

module.exports = function (app) {

    app.get("/", function (req, res) {

        let cb = function(argument) {
            res.render("index", { burger: argument });
            // console.log(argument);
        }
        burger.selectAll(cb);

    });

    app.post("/api/burgers", function (req, res) {
        console.log('You submitted ' + req.body.burger);

        let cb = function() {
            res.redirect("/");
        }
        burger.insertOne("burger_name","devoured",req.body.burger,cb);
    });

    app.put("/api/burgers/:id", function (req,res) {
        console.log("You devoured burger with id= " + req.body.id);

        let cb = function(result) {
            console.log(result);
            console.log("made it this far!")
            // res.redirect("/");
                if (result.changedRows == 0) {
                  // If no rows were changed, then the ID must not exist, so 404
                  return res.status(404).end();
                } else {
                  res.status(200).end();
                }
        }
        burger.updateOne("devoured",true,req.body.id,cb);

    })


}




