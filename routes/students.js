const express = require("express");
const router = express.Router();

const { Student, User } = require("../models");
const createStudent = require("../helpers/createObject")(Student);

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

router.post(
  "/",
  createStudent(
    ["userId", "id"],
    "gradeLevel",
    "tutorId",
    "strength",
    "challenges",
    "learningGoal",
    "preferedLearningMethod",
    "engagementStyle",
    "studyHabit"
  ),
  (req, res) =>
    res.status(201).json({
      message: "student registered successfully",
      student: res.createdObject.dataValues,
    })
);

module.exports = router;
