import React, { useRef } from "react";

const ScrollToSection = () => {
  const ref = useRef(null);

  const handleScrollToSection = ()=>{
    ref.current.scrollIntoView({ behavior: "smooth"})
  }

  return (
    <div>
      <div className="text-center mt-5 mb-5">
        <button onClick={handleScrollToSection} className="px-3 py-1 text-white bg-violet-500 rounded-xl">
          Scroll To Section
        </button>
      </div>
      <div className="text-center w-full h-[800px] bg-red-500 ">Red</div>
      <div className="text-center w-full h-[800px] bg-yellow-500 ">Yellow</div>
      <div ref={ref} className="text-center w-full h-[800px] bg-blue-500 ">Blue</div>
      <div className="text-center w-full h-[800px] bg-orange-500 ">
        Orange
      </div>
      <div className="text-center w-full h-[800px] bg-violet-500 ">Violet</div>
      <div className="text-center w-full h-[800px] bg-pink-500 ">Pink</div>
    </div>
  );
};

export default ScrollToSection;
