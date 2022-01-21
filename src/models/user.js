const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  photos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Photo',
      autopopulate: true,
    },
  ],
})

class User {
  async attend(event) {
    this.event.push(event)
    event.attendees.push(this)

    await event.save()
    await this.save()
  }

  async likeEvent(event) {
    event.likedBy.push(this)

    await this.save()
  }

  async addPhoto(photo) {
    this.photos.push(photo)

    await photo.save()
  }
}
// create event

userSchema.loadClass(User)
userSchema.plugin(autopopulate)

module.exports = mongoose.model('User', userSchema)
