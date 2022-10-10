const mongoose = require("mongoose");
const autopopulate = require("mongoose-autopopulate");

const attendanceSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      autopopulate: true,
    },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      autopopulate: true,
    },
  },
  {
    timestamps: true,
  }
);

attendanceSchema.plugin(autopopulate);

module.exports = mongoose.model("Attendance", attendanceSchema);
