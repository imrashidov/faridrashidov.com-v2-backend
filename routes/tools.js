const express = require("express");
const router = express.Router();
const { Tools } = require("../models/Icons");

router.get("/", async (req, res) => {
  try {
    const tools = await Tools.find();
    res.status(201).json(tools);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
