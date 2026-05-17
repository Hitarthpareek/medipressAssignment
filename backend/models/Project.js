const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: String,
    manager: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Project",
  projectSchema
);