const express = require("express");
const connectWithDB = require("./db");
const landlord = require("./model/landlord.model");
const app = express();
connectWithDB();

app.get("/home", async (req, res) => {
  res.send("home page");
  console.log("home page");
});

app.get("/landlord", (req, res) => {
  const newLandlord = landlord.create({
    userID: 1,
    name: "Radha",
    email: "radha@gmail.com",
    contact: 9897535444,
  });

  res.send("Land Lord");
});

app.listen(8000, () => {
  console.log("server is running on port 3000");
});
