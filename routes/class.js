const express = require("express");
const router = express.Router();
const roleIs = require("../helpers/roleIs");

const { Class } = require("../models");

const createClass = require("../helpers/createObject")(Class);

router.post(
  "/",
  createClass(
    "tutorId",
    "coverPhotoUrl",
    "name",
    "subject",
    "description",
    "type"
  ),
  (req, res) => {
    res.status(201).json({
      message: "class registered successfully",
      class: res.createdObject.dataValues,
    });
  }
);

router.get("/", (req, res) => {
  try {
    const tutorId = req.decoded.id;
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
