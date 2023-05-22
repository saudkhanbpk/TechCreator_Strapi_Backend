const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/techCreator");
const express = require("express");
const app = express();
app.listen(5000, function () {
  console.log("server is run...");
});
