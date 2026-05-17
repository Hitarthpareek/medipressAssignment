const mongoose = require("mongoose");

const workLogSchema = new mongoose.Schema(
  {
    employee: String,
    project: String,
    hours: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "WorkLog",
  workLogSchema
);