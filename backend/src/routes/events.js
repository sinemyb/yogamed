const express = require("express");
const router = express.Router();
const Event = require("../models/event");

router.get("/:eventId", async (req, res) => {
  const event = await Event.findById(req.params.eventId);

  if (event) res.send(event);
  else res.sendStatus(404);
});

router.post("/:eventId/adds", async (req, res) => {
  const event = await Event.findById(req.params.eventId);

  await event.addEvent(event);
  res.sendStatus(200);
});

router.get("/:eventId/json", async (req, res) => {
  const event = await Event.findById(req.params.eventId);
  res.send(event);
});

module.exports = router;

