// ### Overview

// In this assignment, you'll create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

// * Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

// * Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

// * Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

// * Your app will store every burger in a database, whether devoured or not.

// * [Check out this video of the app for a run-through of how it works](https://youtu.be/msvdn95x9OM).

// #### Model setup

//     * Inside `burger.js`, import `orm.js` into `burger.js`

//     * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

//     * Export at the end of the `burger.js` file.



let express = require("express");

let app = express();
let PORT = process.env.PORT || 4000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/burgers_controllers")(app);

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });



// var routes = require("./controllers/catsController.js");

// app.use(routes);

