const Person = require('./person')
const Event = require('./event')
const Photo = require('./photo')

// printName = person => console.log(person.name)

const ceyhan = new Person('ceyhan', 32)
const sinem = new Person('sinem', 36)
const photo = new Photo('central park yoga jpg')
// const event = new Event ('Yoga class in Central Park')

const ycp = new Event('Yoga class in Central Park')

sinem.likeEvent(ycp)
ceyhan.likeEvent(ycp)
sinem.addPhoto(photo)
ceyhan.addPhoto(photo)
sinem.attend(ycp)
ceyhan.attend(ycp)

ycp.printAttendeeNames()

// console.log(ceyhan, ceyhan.photos[0].likedBy)
// console.log(sinem, sinem.photos[0].likedBy)
