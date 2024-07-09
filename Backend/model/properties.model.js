const mongoose = require("mongoose");

const propertiesSchema = mongoose.Schema({
  userID: Number,
  name: String,
  email: String,
  contact: Number,
});

const properties = mongoose.model("properties", propertiesSchema);

module.exports = properties;
