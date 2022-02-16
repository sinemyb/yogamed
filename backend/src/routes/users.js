const express = require("express");

const router = express.Router();
const axios = require("axios");
const { celebrate, Joi, errors, Segments } = require("celebrate");

const describeImage = require("../lib/image-description");
const downloadImage = require("../lib/download-image");
const User = require("../models/user");
const Photo = require("../models/photo");
const Event = require("../models/event");

/* GET users listing. */
router.get(
  "/",
  celebrate({
    [Segments.QUERY]: {
      name: Joi.string(),
      age: Joi.number(),
    },
  }),
  async (req, res) => {
    const query = {};

    if (req.query.name) {
      query.name = req.query.name;
    }

    if (req.query.age) {
      query.age = req.query.age;
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
      age: Joi.number().required(),
      email: Joi.string().email().required(),
    },
  }),
  async (req, res) => {
    const userToCreate = {
      name: req.body.name,
      age: req.body.age,
    };

    const createdUser = await User.create(userToCreate);
    res.send(createdUser);
  }
);

async function createPhoto(filename) {
  const photo = await Photo.create({ filename });

  // const picsumUrl = `https://picsum.photos/seed/${photo._id}/300/300`;
  // const pictureRequest = await axios.get(picsumUrl);
  // photo.filename = pictureRequest.request.path;

  // const imagePath = await downloadImage(picsumUrl, filename);
  // const description = await describeImage(imagePath);
  // photo.description = description.BestOutcome.Description;

  return photo.save();
}

async function createEvent(name) {
  const event = await Event.create({ name });

  return event.save();
}

router.get("/initialize", async (req, res) => {
  const ceyhan = new User({
    name: "ceyhan",
    age: 32,
    email: "ceyhan@ceyhan.com",
  });
  await ceyhan.setPassword("test");
  await ceyhan.save();

  const sinem = new User({ name: "sinem", age: 36, email: "sinem@sinem.com" });
  await sinem.setPassword("test");
  await sinem.save();

  const centralparkPhoto = await createPhoto("centralpark.jpg");
  const ycp = await createEvent("Yoga class in Central Park");

  await sinem.likeEvent(ycp);
  await ceyhan.likeEvent(ycp);
  await sinem.addPhoto(centralparkPhoto);
  // await ceyhan.addPhoto(centralparkPhoto);
  // await sinem.attend(ycp);
  // await ceyhan.attend(ycp);

  console.log(sinem);
  res.sendStatus(200);
});

router.post("/:userId/adds", async (req, res) => {
  const user = await User.findById(req.params.userId);
  const photo = await Photo.findById(req.body.photoId);

  await user.addPhoto(photo);
  res.sendStatus(200);
});

router.post("/:userId/likes", async (req, res) => {
  const user = await User.findById(req.params.userId);
  const event = await Event.findById(req.body.eventId);

  await user.likeEvent(event);
  res.sendStatus(200);
});

router.post("/:userId/attends", async (req, res) => {
  const user = await User.findById(req.params.userId);
  const event = await Event.findById(req.body.eventId);

  await user.attend(event);
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
