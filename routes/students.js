const express = require("express");
const router = express.Router();

const { Student, User } = require("../models");

router.get("/name", async (req, res) => {
  const tutorId = req.decoded.id;
  const students = await Student.findAll({
    where: { tutorId: tutorId },
    attributes: ["id"],
    include: {
      model: User,
      attributes: ["firstName", "lastName"],
    },
  });

  res.json(students);
});

module.exports = router;
