const mongoose = require("mongoose");

const tenantSchema = mongoose.Schema({
  userID: Number,
  name: String,
  email: String,
  contact: Number,
});

const tenant = mongoose.model("Tanent", tenantSchema);

module.exports = tenant;
