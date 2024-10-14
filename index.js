const express = require("express");
const { db } = require("./config/database.js");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", require("./routers/index.js"));
app.use(express.static("node_modules"));
app.use(express.static(path.join(__dirname, "public")));

app.listen(8081, (err) => {
  if (!err) {
    db();
    console.log("server start\nhttp://localhost:8081");
  }
});
