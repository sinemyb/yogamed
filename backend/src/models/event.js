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



// add data analysis/mongodb aggregation
// add event date
// add location/geo
// module.exports = mongoose.model("Theater", {
//   theaterId: Number,
//   location: {
//     address: {
//       street1: String,
//       city: String,
//       state: String,
//       zipcode: String,
//     },
//     geo: {
//       type: String,
//       coordinates: [Number],
//     },
//   },
// });


eventSchema.plugin(autopopulate)
module.exports = mongoose.model('Event', eventSchema)


// this.attendees = []
// printAttendeeNames() {
// this.attendees.forEach(printName)
// }
// module.exports = Event

// google map
