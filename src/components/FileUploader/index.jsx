import React, { useState } from "react";
import axios from "axios";

function FileUploader() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("idle");
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleFileUpload = async () => {
    if (!file) return;

    setStatus("uploading");
    setUploadProgress(0);
    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("https://httpbin.org/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const progress = progressEvent.total
            ? Math.round((progressEvent.loaded * 100) / progressEvent.total)
            : 0;
          setUploadProgress(progress);
        },
      });
      setStatus("success");
      setUploadProgress(100);
    } catch (error) {
      setStatus("error");
      setUploadProgress(0);
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center h-screen bg-black text-white">
      <h1 className="text-8xl font-medium pt-40 pb-30">File Uploader</h1>
      <input
        type="file"
        onChange={handleFileChange}
        className="bg-white text-black px-3 py-1 rounded-xl"
      />

      {file && (
        <div className="mt-15 mb-10 flex flex-col gap-2">
          <p>File name : {file.name}</p>
          <p>Size : {(file.size / 1024).toFixed(2)} KB</p>
          <p>Type: {file.type}</p>
        </div>
      )}

      {status === "uploading" && (
        <div className="space-y-2">
          <div className="h-2.5 w-[500px] rounded-full bg-gray-200">
            <div
              className="h-2.5 w-[500px] rounded-full bg-blue-600 transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
          <p className="text-gray-200">{uploadProgress}% uploaded</p>
        </div>
      )}

      {file && status !== "uploading" && (
        <button
          className="bg-indigo-600 px-5 py-2 rounded-full active:bg-indigo-700 hover:bg-indigo-500 transition-all duration-300"
          onClick={handleFileUpload}
        >
          Upload
        </button>
      )}

      {status === "success" && (
        <div className="mt-3 text-green-600">File Uploaded successfully !</div>
      )}

      {status === "error" && (
        <div className="mt-3 text-red-600">
          Upload Failed... Please try again!!!
        </div>
      )}
    </div>
  );
}

export default FileUploader;
