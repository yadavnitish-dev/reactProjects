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
      <div className="flex bg-white w-[500px] text-[10px] justify-around select-none">
        {steps && steps.length
          ? steps.map((step, idx) => <div key={idx}>{step}</div>)
          : null}
      </div>
      <div className="flex gap-10 mt-10 ">
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
