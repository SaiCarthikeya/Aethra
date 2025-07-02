import React from 'react'

const Message = (props) => {
    const baseClasses = "m-2 p-4 max-w-xs text-white text-lg";
    const isUser = props.role === "user";

    const classname = isUser
    ? `self-end bg-blue-500 rounded-tl-lg rounded-tr-lg rounded-bl-lg ${baseClasses}`
    : `self-start bg-gray-700 rounded-tr-lg rounded-tl-lg rounded-br-lg ${baseClasses}`;
  return (
    <div className={`${classname}`}>
        {props.message}
    </div>
  )
}

export default Message
