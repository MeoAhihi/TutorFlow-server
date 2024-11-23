var express = require("express");
var router = express.Router();

const User = require("../models").User;

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const users = await User.findAll();
  console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send({ msg: "ok" });
});

module.exports = router;
