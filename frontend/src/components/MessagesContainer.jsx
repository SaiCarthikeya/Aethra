import React from 'react';
import { useMessage } from '../context/Messages';
import Message from './Message';

const MessagesContainer = () => {
  const { messages } = useMessage();

  return (
    <div className="text-white m-8 flex flex-col w-full max-w-[680px] h-[500px] overflow-y-auto rounded-lg p-2
    [&::-webkit-scrollbar]:w-2
    [&::-webkit-scrollbar-track]:rounded-full
    [&::-webkit-scrollbar-track]:bg-neutral-700
    [&::-webkit-scrollbar-thumb]:rounded-full
    [&::-webkit-scrollbar-thumb]:bg-neutral-500">
      {messages.general.map((message, idx) => (
        <Message message={message.message} role={message.role} key={idx} />
      ))}
    </div>
  );
};

export default MessagesContainer;
