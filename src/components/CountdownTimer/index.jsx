import { useEffect, useState, useRef } from "react";
import {
  RiPauseLargeFill,
  RiPlayLargeFill,
  RiResetLeftFill,
} from "react-icons/ri";

function Countdown({ initialTime, onTimeFinish }) {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(intervalRef.current);
            setIsRunning(false);

            if (onTimeFinish) {
              onTimeFinish();
            }
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning, onTimeFinish]);

  const handlePauseAndResume = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(initialTime);
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="flex justify-center items-center h-screen flex-col bg-black text-white">
      <h1 className="mb-20 text-8xl font-medium">Timer</h1>
      <div className="text-9xl">
        {String(minutes).padStart(2, "0")} : {String(seconds).padStart(2, "0")}
      </div>

      <div className="mt-20 text-5xl flex gap-[50px]">
        <button
          onClick={handleReset}
          className="bg-indigo-600 rounded-full px-6 py-6 text-white"
        >
          <RiResetLeftFill />
        </button>
        <button
          onClick={handlePauseAndResume}
          className="bg-indigo-600 rounded-full px-6 py-6 text-white"
        >
          {isRunning ? <RiPauseLargeFill /> : <RiPlayLargeFill />}
        </button>
      </div>
    </div>
  );
}

export default Countdown;
