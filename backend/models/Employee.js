const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    name: String,
    department: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Employee",
  employeeSchema
);