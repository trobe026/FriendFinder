var express = require("express");
var bodyParser = require("body-parser");
var http = require("http");
var fs = require("fs");
var url = require('url');
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;
// app.use('css', express.static(path.join(__dirname + 'css')));

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));




// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
