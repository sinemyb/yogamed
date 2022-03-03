const mongoose = require("mongoose");
const autopopulate = require("mongoose-autopopulate");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  bio: String,
  events: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
      autopopulate: true,
    },
  ],
  attendances: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
      autopopulate: true,
    },
  ],
})


class User {
  async addEvent(event) {
    this.events.push(event)
    await this.save()
  }

  async attendEvent(event) {
    event.attendedBy.push(this)

    await event.save()
    await this.save()
  }
  async addComment(event, comment) {
    event.comments.push({ user: this, comment });

    await event.save();
    await this.save();
  }
}
userSchema.loadClass(User);
userSchema.plugin(autopopulate);
userSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
});

module.exports = mongoose.model("User", userSchema)
