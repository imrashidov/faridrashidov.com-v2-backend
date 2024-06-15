const express = require("express");
const router = express.Router();
const { VCS } = require("../models/Icons");

router.get("/", async (req, res) => {
  try {
    const vcs = await VCS.find();
    res.status(201).json(vcs);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
