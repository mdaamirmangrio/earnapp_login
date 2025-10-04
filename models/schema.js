const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
  cnic: {
    type: String,
    required: true,
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
