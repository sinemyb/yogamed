const mongoose = require("mongoose");
const autopopulate = require("mongoose-autopopulate");

const photoSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
});

photoSchema.plugin(autopopulate);
module.exports = mongoose.model("Photo", photoSchema);
