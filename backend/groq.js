import Groq from "groq-sdk";
import dotenv from 'dotenv';
dotenv.config();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });


export async function getGroqChatCompletion(history, role, content) {
    return groq.chat.completions.create({
        messages: [
            ...history,
            {
                role: role,
                content: content,
            },
        ],
        model: "llama-3.3-70b-versatile",
    });
}

// console.log(chatCompletion.choices[0]?.message?.content || ""); function response -> print

