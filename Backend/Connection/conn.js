const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://sparshbansal:astr7350@backend.qobowrl.mongodb.net/")
  .then(() => {
    console.log("connected to database");
  })
  .catch((error) => {
    console.log("error in connection", error);
  });
