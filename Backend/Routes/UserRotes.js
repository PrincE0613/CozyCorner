const express = require("express");
const { createUser } = require("../Middleware/UserMiddleware");
const UserRotes = express.Router();
UserRotes.post("/signup", createUser); //middeware dfunction
module.exports = UserRotes;
