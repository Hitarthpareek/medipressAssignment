const mongoose = require("mongoose");

const projectSchema =
  new mongoose.Schema(
    {
      userId: {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",
      },

      username: String,

      projectName: String,

      description: String,

      isOngoing: Boolean,

      startDate: Date,

      endDate: Date,
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Project",
    projectSchema
  );