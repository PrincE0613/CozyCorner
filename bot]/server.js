const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const port = 3000;

const genAI = new GoogleGenerativeAI("AIzaSyAneaiTlHqz4TRCiOR0rriOFJMNyUMHF-U");

app.use(bodyParser.json());
const corss = {
  origin: "https://sparshbansal-08.github.io",
  methods: ["POST", "GET"],
  credentials: true,
};
app.use(cors(corss));
app.get("/", (req, res) => {
  res.send("API Working");
});
app.post("/getResponse", async (req, res) => {
  const { name, problem } = req.body;

  const prompt = `You are experienced landlord and i want you to give solution to my problem which is that '${problem}' , Give the solution as perfect landolord as its phrases, and also make sure that the format of output is in the form of a letter from from a experienced landlord`;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    res.send(`Radhe Radhe🩵, ${name}. ${text}`);
  } catch (error) {
    res.status(500).send("Something went wrong!");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
