const express = require("express");
const router = express.Router();
const { Frameworks } = require("../models/Icons");

router.get("/", async (req, res) => {
  try {
    const frameworks = await Frameworks.find();
    res.status(201).json(frameworks);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
