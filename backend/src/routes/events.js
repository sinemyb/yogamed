const express = require("express");

const router = express.Router();
const Event = require("../models/event");

/* POST create an event */
router.post("/", async (req, res) => {
  const eventToCreate = {
    name: req.body.name,
  };

  const createdEvent = await Event.create(eventToCreate);
  res.send(createdEvent);
});

// router.post("/:eventId/attendances", async (req, res) => {
//   const event = await Event.findById(req.params.eventId);

//   await event.attend(req.user);
//   res.sendStatus(200);
// });

module.exports = router;
