const express = require("express");
const router = express.Router();

const Tutor = require("../models").Tutor;
const User = require("../models").User;

router.get("/", async (req, res) => {
  const { tutorId } = req.params;

  const tutor = await Tutor.findByPk(tutorId, {
    include: {
      model: User,
      attributes: { exclude: ["password"] },
    },
    attributes: { exclude: ["UserId"] },
  });
  res.json(tutor);
});

module.exports = router;
