import React from "react";
import useWindowResize from ".";

const UseWindowResizeTest = () => {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;
  return (
    <div className="text-center pt-20">
      <h1 className="text-2xl">Window Size</h1>
      <p>Width : {width}</p>
      <p>Height : {height}</p>
    </div>
  );
};

export default UseWindowResizeTest;
