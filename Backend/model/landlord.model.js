const mongoose = require("mongoose");

const landlordSchema = mongoose.Schema({
  userID: Number,
  name: String,
  email: String,
  contact: Number,
});

const landlord = mongoose.model("Landlord", landlordSchema);

module.exports = landlord;
