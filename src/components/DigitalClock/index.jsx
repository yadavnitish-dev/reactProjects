import React, { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black gap-15">
      <div className="text-white text-9xl">
        <span>{time.getHours().toString().padStart(2, "0")} : </span>
        <span>{time.getMinutes().toString().padStart(2, "0")} : </span>
        <span>{time.getSeconds().toString().padStart(2, "0")}</span>
      </div>

      <div className="text-5xl text-indigo-600">
        {time.toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
    </div>
  );
}

export default DigitalClock;
