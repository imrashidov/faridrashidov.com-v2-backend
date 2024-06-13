const express = require("express");
const router = express.Router();

const projectsRoute = require("./projects");
const languagesRoute = require("./languages");
const frameworksRoute = require("./frameworks");
const cssesRoute = require("./csses");
const ormsRoute = require("./orms");
const vcsRoute = require("./vcs");
const designsRoute = require("./designs");
const hostingsRoute = require("./hostings");
const toolsRoute = require("./tools");

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
