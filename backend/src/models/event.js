const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  attendedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      autopopulate: true,
    },
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  description: String,
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        autopopulate: { maxDepth: 1 },
      },
      comment: String,
    },
  ],
});


eventSchema.plugin(autopopulate)
module.exports = mongoose.model('Event', eventSchema)


