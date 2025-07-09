import React from 'react'
import ReactMarkdown from 'react-markdown';


const Message = (props) => {
    const baseClasses = "m-2 p-4 text-white text-lg";
    const isUser = props.role === "user";

    const classname = `${isUser 
    ? 'self-end bg-blue-500 rounded-tl-lg rounded-tr-lg rounded-bl-lg' 
    : 'self-start bg-gray-700 rounded-tr-lg rounded-tl-lg rounded-br-lg'} 
    prose prose-sm whitespace-pre-wrap prose-p:mb-2 ${baseClasses}`;

  return (
    <div className={classname}>
      <ReactMarkdown>{props.message}</ReactMarkdown>
    </div>
  );

}

export default Message
