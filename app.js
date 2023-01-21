const path = require("path");
const express = require("express");
const app = express();
const port = 3000;
const hostname = "127.0.0.1";
const enginer = require("express-handlebars");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/nodeblog_db")
  .then(() => console.log("Connected!"));

app.use(express.static("public"));

app.engine("handlebars", enginer.engine());
app.set("view engine", "handlebars");

const main = require("./routes/main");
app.use("/", main);

app.listen(port, hostname, () => {
  console.log(`listining! http://${hostname}:${port}/`);
});
