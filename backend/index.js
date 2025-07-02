import express from "express";
import cors from 'cors';
import { getGroqChatCompletion } from "./groq.js";
const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());


app.post("/chat", async (req, res) => {
  try {
    let { history, content, role } = req.body;

    if (!content) {
      return res.status(400).json({ error: "content is required" });
    }

    if (!Array.isArray(history)) {
      history = [];
    }

    if (history.length === 0) {
      history.push({
        role: "system",
        content: "You are a helpful assistant.",
      });
    }

    // Append new user message and get completion
    const response = await getGroqChatCompletion(history, role, content);

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
