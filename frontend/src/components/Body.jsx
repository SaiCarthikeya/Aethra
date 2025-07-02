import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { useMessage } from "../context/Messages";
import MessagesContainer from "./MessagesContainer";

const Body = () => {
      const [inputText, setInputText] = useState("");
      const { messages, setMessages } = useMessage(); 
      // console.log(messages)
      const sendMessage = async () => {
      if (inputText.trim() === "") return;

      try {
        const response = await fetch("http://localhost:5000/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            history: messages.general,
            content: inputText,
            role: "user"
          }),
        });

        if (!response.ok) throw new Error("API error");

        const data = await response.json();

        setMessages((prev) => ({
          ...prev,
          general: [
            ...prev.general,
            { role: "user", content: inputText },
            { role: "assistant", content: data.reply },
          ],
        }));

        setInputText("");
      } catch (error) {
        console.error("Failed to send message:", error);
      }
    };

    return (
        <div className="flex-1 bg-gray-900 p-4 flex justify-end items-center flex-col pb-36">
        <MessagesContainer/>
         <div className="w-full max-w-2xl mt-4 flex items-center gap-2 transition-transform duration-200 hover:scale-105">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-5 py-4 text-lg min-h-12 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-md
                  [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:rounded-full
          [&::-webkit-scrollbar-track]:bg-neutral-700
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-neutral-500"
          />
          <button
            onClick={sendMessage}
            className="px-5 py-4 text-lg bg-gray-700 text-gray-200 rounded-xl hover:bg-gray-600 active:scale-95 transition-all duration-200 shadow-md flex items-center justify-center"
          >
            <IoSend size={24} />
          </button>
        </div>


        </div>
    );
};

export default Body;
