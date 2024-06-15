const express = require("express");
const router = express.Router();

const projectsRoute = require("../routes/projects");
const languagesRoute = require("../routes/languages");
const frameworksRoute = require("../routes/frameworks");
const cssesRoute = require("../routes/csses");
const ormsRoute = require("../routes/orms");
const vcsRoute = require("../routes/vcs");
const designsRoute = require("../routes/designs");
const hostingsRoute = require("../routes/hostings");
const toolsRoute = require("../routes/tools");

router.use("/projects", projectsRoute);
router.use("/languages", languagesRoute);
router.use("/frameworks", frameworksRoute);
router.use("/csses", cssesRoute);
router.use("/orms", ormsRoute);
router.use("/vcs", vcsRoute);
router.use("/designs", designsRoute);
router.use("/hostings", hostingsRoute);
router.use("/tools", toolsRoute);

module.exports = router;
