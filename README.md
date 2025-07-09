# Aethra

Aethra is a multi-mode chatbot application built with React and powered by Groq's large language models. It allows users to switch between specialized chatbot roles such as General Assistant, Medical Diagnoser, Fitness Coach, and Mental Health Companion. Each mode uses a distinct system prompt to guide the model’s behavior.

Live demo: [https://aethra.onrender.com](https://aethra.onrender.com)

---

## Modes

Aethra supports four chatbot modes:

- **General Assistant**  
  Provides general-purpose assistance across topics with helpful, relevant answers.

- **Medical Diagnoser**  
  Asks follow-up questions to gather information and suggests possible causes, with disclaimers and recommendations to consult professionals.

- **Fitness Coach**  
  Shares personalized workout guidance, form safety tips, and motivational advice.

- **Mental Health Companion**  
  Responds supportively with a calm tone and mental wellness suggestions when appropriate.

Each mode changes the system prompt to better match the chatbot’s tone and approach.

---

## Features

- Role-based chatbot behavior via mode switching
- Selectable model (e.g., LLaMA 3.3 70B)
- Message formatting via Markdown (supports lists, code, links)
- Toast notifications for error handling
- Responsive layout with Tailwind CSS

---

## Available Models

Only models supported on Groq's free tier are used:

- `llama-3.3-70b-versatile` – general-purpose LLaMA 3.3 model
- `gemma-7b-it` – instruction-tuned Gemma model
- `llama-3-8b-8192` – smaller and faster variant of LLaMA 3

---

## Tech Stack

- **Frontend**: React, Tailwind CSS, React Markdown, React Toastify  
- **Backend**: Node.js, Express  
- **LLM API**: Groq  
- **Deployment**: Render

---
