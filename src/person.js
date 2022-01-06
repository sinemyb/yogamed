const colors = require('colors')

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.photos = []
  }

  attend(event) {
    this.event = event.name
    event.attendees.push(this)
  }

  likeEvent(event) {
    event.likedBy.push(this)
  }

  addPhoto(photo) {
    this.photos.push(photo)
  }
}

module.exports = Person
