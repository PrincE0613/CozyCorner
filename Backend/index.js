const express = require("express");
const app = express();

app.get("/home", async (req, res) => {
  res.send("home page");
  console.log("home page");
});

app.listen(8000, () => {
  console.log("server is running on port 3000");
});
