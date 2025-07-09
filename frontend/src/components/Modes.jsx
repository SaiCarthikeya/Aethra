
import React from "react";
import { useMessage } from "../context/Context";
import { modes } from "../context/Context"

const Mode = () => {
  const { mode, setMode } = useMessage();

  return (
    <div className="flex flex-row flex-wrap self-center ml-[10%] md:ml-1">
    {Object.entries(modes).map(([key, label]) => (
      <button
        key={key}
        onClick={() => setMode(key)}
        className={`md:px-4 py-1 md:py-2 rounded-xl shadow-md transition-colors duration-200 m-1 w-[40%] sm:w-auto ${
          mode === key
            ? "bg-blue-600 text-white"
            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
        }`}
      >
        {label}
      </button>
    ))}
  </div>
  );
};

export default Mode;
