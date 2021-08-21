var express = require("express");
var app = express();

//Define request response in root URL (/)
app.get("/", function (req, res) {
  res.send("Sample Jira App");
});

//server listening on port 8080
app.listen(8080, function () {
  console.log("Listening on port 8080!");
});
