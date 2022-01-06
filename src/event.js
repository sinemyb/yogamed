class Event {
  constructor(name) {
    this.name = name
    this.attendees = []
    this.likedBy = []
  }

  printAttendeeNames() {
    // this.attendees.forEach(printName)
  }
}

module.exports = Event
