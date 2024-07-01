const mongoose = require("mongoose");

function connectWithDB() {
  mongoose
    .connect("mongodb://localhost:27017/Housing_Rental")
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      console.log(err);
    });
}
module.exports = connectWithDB;
