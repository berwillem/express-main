const express = require("express");
const { myLogger } = require("../middlewares/logger");
const router = express.Router();

router.get("/user", myLogger, function (req, res) {
  res.send("user");
});
router.get("/test", function (req, res) {
  res.send("test");
});
module.exports = router;
