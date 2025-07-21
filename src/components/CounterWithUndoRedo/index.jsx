import { Redo2, Undo2 } from "lucide-react";
import { useState } from "react";

const Counter = () => {
  const [history, setHistory] = useState([0]);
  const [position, setPosition] = useState(0);

  const currentValue = history[position];

  const addValueToHistory = (newValue) => {
    // Discard future history if not at the end
    const updatedHistory = history.slice(0, position + 1);
    setHistory([...updatedHistory, newValue]);
    setPosition(position + 1);
  };

  const handleIncrement = () => addValueToHistory(currentValue + 1);
  const handleDecrement = () => addValueToHistory(currentValue - 1);

  const handleUndo = () => {
    if (position > 0) setPosition(position - 1);
  };

  const handleRedo = () => {
    if (position < history.length - 1) setPosition(position + 1);
  };

  return (
    <>
      <div className="text-center text-7xl pt-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white h-screen w-screen">
        <h1 className="font-bold drop-shadow-lg">Counter App with Undo and Redo</h1>
        <div className="mt-10 text-[200px] font-extrabold drop-shadow-2xl transition-all duration-300">
          {currentValue}
        </div>
        <div className="text-4xl mt-10 flex gap-10 justify-center">
          <button
            className="bg-white rounded-full text-black px-6 py-2 shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-200 focus:ring-4 focus:ring-blue-300"
            onClick={handleIncrement}
          >
            Increment
          </button>
          <button
            className="bg-white rounded-full text-black px-6 py-2 shadow-lg hover:bg-red-500 hover:text-white transition-all duration-200 focus:ring-4 focus:ring-red-300"
            onClick={handleDecrement}
          >
            Decrement
          </button>
        </div>
        <div className="flex justify-center gap-10 mt-10">
          <div>
            <button
              className="bg-white rounded-full text-black px-5 py-2 text-4xl flex items-center shadow-lg hover:bg-gray-300 transition-all duration-200 focus:ring-4 focus:ring-gray-400 disabled:opacity-50"
              onClick={handleUndo}
              disabled={position === 0}
            >
              Undo
              <Undo2 className="mt-1 ml-2" />
            </button>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white px-5 py-2 text-4xl flex items-center shadow-lg font-mono select-none cursor-default">
            {position + 1}/{history.length}
          </button>
          <div>
            <button
              className="bg-white rounded-full text-black px-5 py-2 text-4xl flex items-center shadow-lg hover:bg-gray-300 transition-all duration-200 focus:ring-4 focus:ring-gray-400 disabled:opacity-50"
              onClick={handleRedo}
              disabled={position === history.length - 1}
            >
              Redo
              <Redo2 className="mt-1 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
