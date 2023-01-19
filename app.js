const path = require("path");
const express = require("express");
const app = express();
const port = 3000;
const hostname = "127.0.0.1";

app.use(express.static("public"));

// "/" ifadesi yonlendirmenin nereye gidecegini belirtiyor
// , den sonraki kisim callbeck fonksiyonu
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "site/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "site/about.html"));
});

app.get("/blog", (req, res) => {
  res.sendFile(path.resolve(__dirname, "site/blog.html"));
});

app.listen(port, hostname, () => {
  console.log(`listining! http://${hostname}:${port}/`);
});
