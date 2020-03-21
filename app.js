var express = require("express"),
  app = express();

// Set up
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/scss"));

//Routes
app.get("/", (req, res) => {
  res.render("portfolio/start");
});

// Port
let port = 3000;
app.listen(port, () => {
  console.log("Server Start!");
});
