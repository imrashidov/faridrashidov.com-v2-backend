const express = require("express");
const router = express.Router();
const { ORM } = require("../models/Icons");

router.get("/", async (req, res) => {
  try {
    const orm = await ORM.find();
    res.status(201).json(orm);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
