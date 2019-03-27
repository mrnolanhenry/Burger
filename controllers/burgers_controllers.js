let express = require("express");
let app = express();
let burger = require("../models/burger");

module.exports = function (app) {

    app.get("/", function (req, res) {

        let cb = function(argument) {
            res.render("index", { burger: argument });
        }
        burger.selectAll(cb);

    });

    app.post("/api/burgers", function (req, res) {
        let cb = function() {
            res.redirect("/");
        }
        burger.insertOne("burger_name","devoured",req.body.burger,cb);
    });

    app.put("/api/burgers/:id", function (req,res) {
        let cb = function(result) {
                if (result.changedRows == 0) {
                  return res.status(404).end();
                } else {
                  res.status(200).end();
                }
        }
        burger.updateOne("devoured",true,req.body.id,cb);
    })


}




