const mongoose = require("mongoose");

const ProjectsSchema = new mongoose.Schema({
  _id: { type: Number },
  name: { type: String },
  image: { type: String },
  title: { type: String },
  description: { type: String },
  features: { type: String },
  features2: { type: String },
  github: { type: String },
  demo: { type: String },
});

const Projects = mongoose.model("Projects", ProjectsSchema);

module.exports = Projects;
