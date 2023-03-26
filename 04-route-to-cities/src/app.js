const express = require("express");

const app = express();

// create 3 handlers for 3 paths
app.get("/Gaza", (req, res) => {
  res.send(`Hello ${req.path.split("/")[1]}`);
});
app.get("/London", (req, res) => {
  res.send(`Hello ${req.path.split("/")[1]}`);
});
app.get("/Rafah", (req, res) => {
  res.send(`Hello ${req.path.split("/")[1]}`);
});
app.listen(3000, () => {
  console.log("App running on port 3000");
});
