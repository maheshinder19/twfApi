const express = require("express");
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE");
    return res.status(200).json({});
  }
  next();
});

const orderRoute = require("./orderRoute");

var jsonParser = require("body-parser").json;
var logger = require("morgan");

app.use(logger("dev"));
app.use(jsonParser());

app.use("/order", orderRoute);
app.get("/", (req, res, next) => {
  res.send("twfflours assessment");
});
app.use("/order", orderRoute);

// catch 404 and forward to error handler

app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;

  next(err);
});

//Error Handler

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message
  });
  next();
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Server running at localhost:${port}`);
});
