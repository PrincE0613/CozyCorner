const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  Username: {
    type: String,
    required: true,
    trim: true,
  },
  Email: {
    type: String,
    required: true,
    trim: true,
  },
  PhoneNumber: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
    trim: true,
  },
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
