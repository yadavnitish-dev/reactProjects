import React, { useState } from "react";
import QRCode from "react-qr-code";

function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateQrCode = () => {
    setQrCode(input);
    setInput("");
  };

  return (
    <div className="flex flex-col items-center h-screen pt-20 ">
      <h1 className="font-medium text-8xl">QR Code Generator</h1>
      <div className="pt-15">
        <input
          className="p-2 border-l-1 border-b-1 border-t-1 border-gray-600 rounded-l-full w-[350px] outline-none"
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
        />
        <button
          className="pt-2 pr-4 pb-2 pl-3 bg-indigo-600 border-b-1 border-t-1 border-gray-600 hover:bg-indigo-700 active:bg-indigo-800 text-white rounded-r-full"
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div className="mt-20">
        <QRCode
          id="qr-code-value"
          size={400}
          bgColor="#ffffff"
          value={qrCode}
        />
      </div>
    </div>
  );
}

export default QRCodeGenerator;
