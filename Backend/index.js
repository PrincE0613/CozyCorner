const express = require("express");
const connectWithDB = require("./db");
const landlord = require("./model/landlord.model");
const tenant = require("./model/tenant.model");
const properties = require("./model/properties.model");
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

  const newLandlord2 = landlord.create({
    userID: 2,
    name: "Krishna",
    email: "krishna@gmail.com",
    contact: 9876543210,
  });

  res.send("Land Lord");
});

app.get("/tenant", (req, res) => {
  const newTenant = tenant.create({
    userID: 1,
    name: "Sparsh",
    email: "Sparsh@gmail.com",
    contact: 9897535444,
  });

  const newTenant2 = tenant.create({
    userID: 2,
    name: "Shyam",
    email: "Shyam@gmail.com",
    contact: 9876543210,
  });

  res.send("Tenant");
});

app.listen(8000, () => {
  console.log("server is running on port 3000");
});
