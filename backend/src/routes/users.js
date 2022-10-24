const express = require("express");

const router = express.Router();
const axios = require("axios");

const { celebrate, Joi, errors, Segments } = require("celebrate");

const User = require("../models/user");
const Event = require("../models/event");

/* GET users listing. */
router.get(
  "/",
  celebrate({
    [Segments.QUERY]: {
      name: Joi.string(),
      location: Joi.string(),
    },
  }),
  async (req, res) => {
    const query = {};

    if (req.query.name) {
      query.name = req.query.name;
    }

    if (req.query.location) {
      query.location = req.query.location;
    }

    res.send(await User.find(query));
  }
);

/* POST create a user */
router.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      location: Joi.string().required(),
      email: Joi.string().email().required(),
    },
  }),
  async (req, res) => {
    const userToCreate = {
      name: req.body.name,
      location: req.body.location,
      email: req.body.email,
    };

    const createdUser = await User.create(userToCreate);
    res.send(createdUser);
  }
);

async function createEvent(name) {
  const event = await Event.create({ name });

  return event.save();
}



router.get("/initialize", async (req, res) => {
  const ceyhan = new User({ name: "Ceyhan", location: "Barcelona", email: "cey@cey.com" });
  await ceyhan.setPassword("test");
  await ceyhan.save();

  const sinem = new User({ name: "Sinem", location: "Amsterdam", email: "sinem@sinem.com" });
  await sinem.setPassword("test");
  await sinem.save();

  const serhat = new User({ name: "Serhat", location: "Atlanta", email: "serhat@serhat.com" });
  await sinem.setPassword("test");
  await sinem.save();

  serhat.bio = "I am an experienced dietitian and fitness trainer. I look forward to teaching you my new passion, Yoga, and having fun together. You are in safe hands. Come and join me!"
  serhat.save()

  const yogacentralpark = await Event.create({
    name: "Yoga in Central Park",
    location: "Central Park",
    date: "15/03/2022",
    time: "10:00"
  })

  const meditationparkciutadella = await Event.create({
  name: "Meditation on the Beach Ciutadella",
  location: "Beach Ciutadella",
  date: "15/04/2022",
  time: "10:00"
  })
  
  await serhat.addEvent(yogacentralpark);
  await serhat.addEvent(meditationparkciutadella);

  await sinem.attendEvent(yogacentralpark);
  await ceyhan.attendEvent(yogacentralpark);
  await sinem.attendEvent(meditationparkciutadella);
  await ceyhan.attendEvent(meditationparkciutadella);

  await sinem.addComment(yogacentralpark, "It was the best yoga class I have ever attended. I recommend it to everyone.");

  console.log(serhat);
  console.log(ceyhan);
  console.log(sinem);
  res.sendStatus(200);
}); 

router.post("/:userId/adds", async (req, res) => {
  const user = await User.findById(req.params.userId);
  const event = await Event.findById(req.body.eventId);

  await user.addEvent(event);
  res.sendStatus(200);
});

router.post("/:userId/attends", async (req, res) => {
  const user = await User.findById(req.params.userId);
  const event = await Event.findById(req.body.eventId);

  await user.attendEvent(event);
  res.sendStatus(200);
});

router.get("/:userId", async (req, res) => {
  const user = await User.findById(req.params.userId);

  if (user) res.send(user);
  else res.sendStatus(404);
});

router.get("/:userId/json", async (req, res) => {
  const user = await User.findById(req.params.userId);
  res.send(user);
});

module.exports = router;
