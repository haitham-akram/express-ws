const { join } = require("path");
const getFruit = (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "public", "fruit.html"));
};
const postFruit = (req, res) => {
  console.log(req.body.name, req.body.image_url);
  res.redirect("/fruit");
};

module.exports = { getFruit, postFruit };
