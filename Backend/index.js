const express = require("express");
const UserRotes = require("./Routes/UserRotes");
const app = express();
const bodyparser = require("body-parser");
require("./Connection/conn");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.get("/", (req, res) => {
  res.send("working");
});

app.use(UserRotes);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
