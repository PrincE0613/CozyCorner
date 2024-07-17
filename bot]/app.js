const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyAneaiTlHqz4TRCiOR0rriOFJMNyUMHF-U");

async function run() {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt =
    "You are lord krishna and i want you to give solution to my problem which is that 'i am not able to focus on studies what should i do' , Give the solution from bhagwat geeta book including its phrases, and also make sure that the format of output is in the form of a letter from lord krishna";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();
