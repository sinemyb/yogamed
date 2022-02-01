const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const photoSchema = new mongoose.Schema({
  filename: String,
  // add:
  // type: mongoose.Schema.Types.ObjectId,
  // ref: 'User',
  // autopopulate: true,
})

photoSchema.plugin(autopopulate)
module.exports = mongoose.model('Photo', photoSchema)

// class Photo {
//   constructor(filename) {
//     this.filename = filename
//   }
// }
