const mongoose = require("mongoose");
const userModel = require("./diary");
const dotenv = require("dotenv");

dotenv.config();

// Uncomment the following to debug mongoose queries, etc.
mongoose.set("debug", true);

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.MONGO_USER +
      ":" +
      process.env.MONGO_PWD +
      "@" +
      process.env.MONGO_CLUSTER +
      "/" +
      process.env.MONGO_DB +
      "?retryWrites=true&w=majority",
    {
      useNewUrlParser: true, //useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )

async function getUsers() {
  let result;
  result = await userModel.find();

  return result;
}

async function addUser(user) {
    const userToAdd = new userModel(user);
    const savedUser = await userToAdd.save();
    return savedUser;
  }

async function findUserBySubject(subject) { 
  return await userModel.find({ subject: subject })
}

async function deleteUser(subject) {
  return await userModel.findByIdAndDelete(subject);
}

async function findUserBySubjectAndUpdate(subject,userData) {
  return await userModel.findByIdAndUpdate(subject, userData);
}

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.deleteUser = deleteUser;
exports.findUserBySubject = findUserBySubject;
exports.findUserBySubjectAndUpdate = findUserBySubjectAndUpdate;
