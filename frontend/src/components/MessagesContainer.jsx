import React from 'react';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdDeleteForever } from 'react-icons/md';
import { useMessage } from '../context/Context';
import Message from './Message';

const MessagesContainer = () => {
  const { messages, mode, clearMessages } = useMessage();
  const cur_messages = messages[mode];
  return (
    <>
    <div className="text-white md:m-8 flex flex-col w-[80%] h-[100%] overflow-y-auto rounded-lg p-2
    [&::-webkit-scrollbar]:w-2
    [&::-webkit-scrollbar-track]:rounded-full
    [&::-webkit-scrollbar-track]:bg-neutral-700
    [&::-webkit-scrollbar-thumb]:rounded-full
    [&::-webkit-scrollbar-thumb]:bg-neutral-500">

    {cur_messages.length <= 1 ? (
      <div className="flex flex-col items-center justify-center h-full w-full text-gray-400">
        <IoChatbubbleEllipsesOutline className="h-24 w-24 mb-6 text-blue-500 md:visible collapse" />
        <p className="text-2xl font-semibold mb-2">No messages yet</p>
        <p className="text-lg text-gray-500">Start the conversation by typing below!</p>
      </div>
    ) : (
      <>
      {cur_messages.map((message, idx) => (
        message.role !== "system" &&
        <Message message={message.content} role={message.role} key={idx} />
      ))}
    </>
    )
    }
    </div>
    {cur_messages.length > 1 && (
    <span className="ml-auto mr-4 mb-0 md:mr-12 border-red-500 md:border-2 md:border-solid rounded-lg md:p-3 hover:bg-red-200 text-4xl text-[#ff3366]" onClick={() => clearMessages()}>
      <MdDeleteForever />
    </span>
  )}

</>
  );
};

export default MessagesContainer;
