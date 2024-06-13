const mongoose = require("mongoose");

const IconsSchema = new mongoose.Schema({
  _id: { type: Number },
  icon: { type: String },
  name: { type: String },
});

const Languages = mongoose.model("Languages", IconsSchema);
const Frameworks = mongoose.model("Frameworks", IconsSchema);
const CSS = mongoose.model("CSS", IconsSchema);
const ORM = mongoose.model("ORM", IconsSchema);
const VCS = mongoose.model("VCS", IconsSchema);
const Design = mongoose.model("Design", IconsSchema);
const Hosting = mongoose.model("Hosting", IconsSchema);
const Tools = mongoose.model("Tools", IconsSchema);

module.exports = {
  Languages,
  Frameworks,
  CSS,
  ORM,
  VCS,
  Design,
  Hosting,
  Tools,
};
