import { useState } from "react";
import { FiInfo } from "react-icons/fi";
import { toast } from "react-toastify";
import { models, useMessage } from "../context/Context";

export default function ModelSelector() {
  const {model, setModel} = useMessage()
  const selectedLabel = models.find((m) => m.id === model)?.label;
  const [isOpen, setIsOpen] = useState(false)
  const describeModel = (description) => {
    toast.info(description)
  }

  return (
    <div className="relative inline-block w-64 overflow-y-auto md:overflow-y-visible">
        {isOpen && (
          <ul className="absolute left-0 w-full bg-gray-800 text-white shadow-lg rounded-xl mb-2 z-10">
            {models.map((m) => (
              <li
                key={m.id}
                onClick={() => {
                  setModel(m.id);
                  setIsOpen(false);
                }}
                className="flex justify-between items-center px-2 py-3 hover:bg-gray-600 cursor-pointer rounded text-sm"
              >
                <span>{m.label}</span>
                <FiInfo
                  title={m.description}
                  className="text-blue-400 ml-2 cursor-help"
                  onClick={() => describeModel(m.description)}
                />
              </li>
            ))}
          </ul>
        )}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full px-2 py-4 bg-gray-700 text-gray-200 rounded-xl text-sm border border-gray-600 text-left"
      >
        {selectedLabel}
      </button>

    </div>
  );
}
