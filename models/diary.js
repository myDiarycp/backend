
const mongoose = require("mongoose");


const EntrySchema = new mongoose.Schema(
    {
      date: {
        type: String,
        required: true,
        trim: true,
      },
      title: {
        type: String,
        required: true,
        trim: true,
      },
      text: {
        type: String,
        required: true,
        trim: true,
      },
      rating: {
        type: Number,
        required: true,
        trim: true,
      }
    },
    { collection: "entry_list" }
  );


const UserSchema = new mongoose.Schema(
    {
      _id: {
          type: String,
          required: true,
          trim: true,
        },
      name: {
        type: String,
        required: true,
        trim: true,
      },
      subject: {
        type: String,
        required: true,
        trim: true,
      },
      userProfile: {
        type: String,
        required: true,
        trim: true,
      },
      diary: {
        type: Map,
        of: EntrySchema,
        required: true,
        trim: true,
      },
    },
    { collection: "user_list" }
  );
  

const User = mongoose.model("User", UserSchema);

module.exports = User;

  