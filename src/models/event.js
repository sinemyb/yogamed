const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  likedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
      autopopulate: true,
    },
  ],
})

eventSchema.plugin(autopopulate)
module.exports = mongoose.model('Event', eventSchema)

// eventSchema.plugin(autopopulate)
// module.exports = mongoose.model('Event', eventSchema)

//   //   this.attendees = []
// // printAttendeeNames() {
//   // this.attendees.forEach(printName)
// }
// module.exports = Event
// event date
// add payment for course
// google map
