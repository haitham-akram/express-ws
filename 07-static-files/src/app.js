const express = require("express");
const { join } = require("path");

const app = express();

// use static middleware
app.use(express.static(join(__dirname, "..", "public")));
// send 'fruit.html' file for '/fruit' get path
app.get("/fruit", (req, res) => {
  res.sendfile(join(__dirname, "..", "public", "fruit.html"));
});
app.listen(3000, () => {
  console.log("App running on port 3000");
});
