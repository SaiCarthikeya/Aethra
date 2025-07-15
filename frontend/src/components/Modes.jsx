import React from "react";
import { useMessage } from "../context/Context";
import { modes } from "../context/Context";

const Mode = () => {
  const { mode, setMode } = useMessage();

  return (
    <div className="flex flex-row flex-nowrap md:flex-wrap overflow-x-auto overflow-y-hidden whitespace-nowrap h-[4rem] mt-2 mb-2 md:pb-4 hide-scrollbar">
      {Object.entries(modes).map(([key, label]) => (
        <button
          disabled={label==="Dummy"}
          key={key}
          onClick={() => setMode(key)}
          className={`px-4 py-2 rounded-xl  shadow-md transition-colors duration-200 mx-2 min-w-[30%] text-xs md:text-base sm:min-w-[140px] ${
            mode === key
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          } ${label === "Dummy" ? "opacity-0 w-32 cursor-default" : ""}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Mode;
