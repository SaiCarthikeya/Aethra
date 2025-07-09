import express from "express";
import cors from 'cors';
import { getGroqChatCompletion } from "./groq.js";
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());


app.post("/chat", async (req, res) => {
  try {
    let { history, content, role, model } = req.body;

    if (!content) {
      return res.status(400).json({ error: "content is required" });
    }

    // console.log(history)

    // Append new user message and get completion
    const response = await getGroqChatCompletion(history, role, content, model);

    const assistantReply = response.choices[0]?.message?.content || "";

    res.json({ reply: assistantReply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
