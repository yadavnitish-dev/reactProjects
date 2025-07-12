import React, { useState } from "react";
import QRCode from "react-qr-code";

function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateQrCode = () => {
    setQrCode(input);
    setInput("");
  }

  return (
    <div>
      <h1 className="flex justify-center font-extrabold text-4xl mt-10">
        QR Code Generator
      </h1>
      <div className="flex justify-center mt-20">
        <input
          className="p-2 shadow-lg mr-5 rounded-full"
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
        />
        <button
          className="p-2 bg-blue-400 text-white rounded-full"
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div className="flex justify-center mt-5">
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
