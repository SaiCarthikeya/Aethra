import { createContext, useContext, useState } from "react";

export const modes = {
  general: "General",
  medicalDiagnoser: "Medical Diagnoser",
  fitnessCoach: "Fitness Coach",
  mentalHealthCompanion: "Mental Health Companion"
};


export const MessageContext = createContext({
  messages: { general: [], medicalDiagnoser: [], fitnessCoach: [], mentalHealthCompanion: [] },
  setMessages: () => {},
  mode: "general",
  setMode: () => {},
});


export const useMessage = () => {
    const message = useContext(MessageContext);
    return message;
}

export const MessageProvider = (props) => {
     const [messages, setMessages] = useState({
        general: [],
        medicalDiagnoser: [],
        fitnessCoach: [],
        mentalHealthCompanion: []
    });
    const [mode, setMode] = useState("general")
    return (
        <MessageContext.Provider value={{messages, setMessages, mode, setMode}}>
            {props.children}
        </MessageContext.Provider>
    )
}
