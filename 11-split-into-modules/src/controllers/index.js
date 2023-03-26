// use express.Router() class and load it with controllers
const express = require("express");
const router = express.Router();
const { getFruit, postFruit } = require("./fruit");
const { clientError, serverError } = require("./error");
router.get("/fruit", getFruit);
router.post("/fruit", postFruit);
router.use(clientError);
router.use(serverError);
module.exports = router;
