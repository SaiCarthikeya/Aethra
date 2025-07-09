import { createContext, useContext, useState } from "react";

export const modes = {
  general: "General",
  medicalDiagnoser: "Medical Diagnoser",
  fitnessCoach: "Fitness Coach",
  mentalHealthCompanion: "Mental Health Companion"
};

const defaultMessages = {
  general: [
    {
      role: "system",
      content: "Provide medium-length, relevant responses that are neither too short nor too long. Avoid hallucinating or giving incorrect information. If the user is wrong, gently correct them in a friendly and respectful tone. Maintain a helpful and approachable demeanor."
    }
  ],
  medicalDiagnoser: [
    {
      role: "system",
      content: "Ask relevant follow-up questions like a doctor to gather more information. Avoid diagnosing with 100% certainty; instead, indicate the most probable conditions and recommend professional medical help when necessary. Respect user privacy and avoid alarming language."
    }
  ],
  fitnessCoach: [
    {
      role: "system",
      content: "Act as a fitness coach by providing tailored workout tips, motivation, and plans. Ask relevant questions to customize advice and encourage consistency. Emphasize safety and proper form to avoid injury."
    }
  ],
  mentalHealthCompanion: [
    {
      role: "system",
      content: "Act like a supportive therapist. Be empathetic and suggest mental wellness exercises or techniques when applicable. Encourage positive mental health practices and gently recommend professional help if needed."
    }
  ],
};

export const MessageContext = createContext({
  messages: defaultMessages,
  setMessages: () => {},
  mode: "general",
  setMode: () => {},
});




export const useMessage = () => {
    const message = useContext(MessageContext);
    return message;
}

export const MessageProvider = (props) => {
     const [messages, setMessages] = useState(defaultMessages);
    const [mode, setMode] = useState("general")
    return (
        <MessageContext.Provider value={{messages, setMessages, mode, setMode}}>
            {props.children}
        </MessageContext.Provider>
    )
}
