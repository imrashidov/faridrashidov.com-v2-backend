const express = require("express");
const router = express.Router();
const { Design } = require("../models/Icons");

router.get("/", async (req, res) => {
  try {
    const designs = await Design.find();
    res.status(201).json(designs);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
