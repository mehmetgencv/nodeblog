const path = require("path");
const express = require("express");
const app = express();
const port = 3000;
const hostname = "127.0.0.1";
const enginer = require("express-handlebars");

app.use(express.static("public"));

app.engine("handlebars", enginer.engine());
app.set("view engine", "handlebars");

// "/" ifadesi yonlendirmenin nereye gidecegini belirtiyor
// , den sonraki kisim callbeck fonksiyonu
app.get("/", (req, res) => {
  res.render("site/index");
});

app.get("/about", (req, res) => {
  res.render("site/about");
});

app.get("/blog", (req, res) => {
  res.render("site/blog");
});

app.get("/contact", (req, res) => {
  res.render("site/contact");
});

app.listen(port, hostname, () => {
  console.log(`listining! http://${hostname}:${port}/`);
});
