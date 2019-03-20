// ### Overview

// In this assignment, you'll create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

// * Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

// * Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

// * Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

// * Your app will store every burger in a database, whether devoured or not.

// * [Check out this video of the app for a run-through of how it works](https://youtu.be/msvdn95x9OM).


// -----------------------------------------------------------------------------------------

// #### DB Setup

// 4. Run the `schema.sql` and `seeds.sql` files into the mysql server from the command line

// 5. Now you're going to run these SQL files.

//    * Make sure you're in the `db` folder of your app.

//    * Start MySQL command line tool and login: `mysql -u root -p`.

//    * With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

//    * Now insert the entries you defined in `seeds.sql` by running the file: `source seeds.sql`.

//    * Close out of the MySQL command line tool: `exit`.


// #### Model setup

//     * Inside `burger.js`, import `orm.js` into `burger.js`

//     * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

//     * Export at the end of the `burger.js` file.



let express = require("express");

let app = express();
let PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/burgers_controllers")(app);

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });