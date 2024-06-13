const express = require("express");
const router = express.Router();
const Projects = require("../models/Projects");

router.get("/", async (req, res) => {
  try {
    const projects = await Projects.find();
    res.status(201).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
