const express = require("express");
const router = express.Router();

const { Tutor, User } = require("../models");
const createTutor = require("../helpers/createObject")(Tutor);

router.get("/", async (req, res) => {
  const tutorId = req.decoded.id;

  const tutor = await Tutor.findByPk(tutorId, {
    include: {
      model: User,
      attributes: { exclude: ["password"] },
    },
    attributes: { exclude: ["UserId"] },
  });
  res.json(tutor);
});

router.post(
  "/",
  createTutor(["userId", "id"], "education", "subjectOfSpecialized"),
  (req, res) => {
    return res.status(201).json({
      message: "tutor registered successfully",
      tutor: res.createdObject.dataValues,
    });
  }
);

module.exports = router;
