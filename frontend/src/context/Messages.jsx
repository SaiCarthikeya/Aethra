import { createContext, useContext, useState } from "react";


export const MessageContext = createContext({
  messages: { general: [], tech: [] },
  setMessages: () => {}
});


export const useMessage = () => {
    const message = useContext(MessageContext);
    return message;
}

export const MessageProvider = (props) => {
    const [messages, setMessages] = useState({general: [{role: "assistant", content: "hello"}], tech: []})
    return (
        <MessageContext.Provider value={{messages, setMessages}}>
            {props.children}
        </MessageContext.Provider>
    )
}
