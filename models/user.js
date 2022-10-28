const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    subject: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (value.length < 2)
          throw new Error("Invalid subject, must be at least 2 characters.");
      },
    },
    userProfile: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (value.length < 2)
          throw new Error("Invalid data, must be at least 2 characters.");
      },
    },
    entries: {
      type: String, //List?
      required: true,
      trim: true,
      validate(value) {
        if (value.length < 2)
          throw new Error("Invalid data, must be at least 2 characters.");
      },
    },
  },
  { collection: "users_list" }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
