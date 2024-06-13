const express = require("express");
const router = express.Router();
const { Hosting } = require("../models/Icons");

router.get("/", async (req, res) => {
  try {
    const hostings = await Hosting.find();
    res.status(201).json(hostings);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
