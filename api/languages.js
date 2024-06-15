const express = require("express");
const router = express.Router();
const { Languages } = require("../models/Icons");

router.get("/", async (req, res) => {
  try {
    const languages = await Languages.find();
    res.status(201).json(languages);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
