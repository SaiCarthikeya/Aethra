
import React from "react";
import { useMessage } from "../context/Context";
import { modes } from "../context/Context"

const Mode = () => {
  const { mode, setMode } = useMessage();

  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4">
    {Object.entries(modes).map(([key, label]) => (
      <button
        key={key}
        onClick={() => setMode(key)}
        className={`px-4 py-2 rounded-xl shadow-md transition-colors duration-200 w-full sm:w-auto ${
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
