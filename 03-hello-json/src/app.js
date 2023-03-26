const express = require("express");

const app = express();

// send send object as json
app.get("/", (req, res) => {
  res.send({ community: "Gaza Sky Geeks" });
});
app.listen(3000, () => {
  console.log("App running on port 3000");
});
