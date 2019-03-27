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

