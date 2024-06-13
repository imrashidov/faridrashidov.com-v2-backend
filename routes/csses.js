const express = require("express");
const router = express.Router();
const { CSS } = require("../models/Icons");

router.get("/", async (req, res) => {
  try {
    const css = await CSS.find();
    res.status(201).json(css);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
