import React, { act, useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";

function ProgressBar() {
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
  const [activeStep, setActiveStep] = useState(0);

  const handlePreviousStep = () => {
    setActiveStep((prevStep) => {
      return Math.max(prevStep - 1, 0);
    });
  };
  const handleNextStep = () => {
    setActiveStep((prevStep) => {
      return Math.min(prevStep + 1, steps.length - 1);
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      <h1 className="text-8xl mb-40 text-white font-medium">Step Progress Bar</h1>
      <div className="flex bg-white  text-[15px]select-none">
        {steps && steps.length
          ? steps.map((step, idx) => (
              <div
                key={idx}
                className={`transition-colors duration-300 te ${
                  idx <= activeStep
                    ? "bg-green-500 text-green-500"
                    : "bg-gray-300 text-gray-300"
                }`}
              >
                Lorem ipsum dolor sit amet.
              </div>
            ))
          : null}
      </div>
      <div className="flex gap-10 mt-20 ">
        <button
          className="bg-indigo-600 
         px-5 py-5 rounded-full disabled:bg-indigo-300"
          onClick={() => handlePreviousStep()}
          disabled={activeStep === 0}
        >
          <FcPrevious />
        </button>
        <button
          className="bg-indigo-600 
         px-5 py-5 rounded-full disabled:bg-indigo-300"
          onClick={() => handleNextStep()}
          disabled={activeStep === steps.length - 1}
        >
          <FcNext />
        </button>
      </div>
    </div>
  );
}

export default ProgressBar;
