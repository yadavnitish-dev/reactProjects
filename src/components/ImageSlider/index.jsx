import React, { useEffect, useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";

async function fetchImages() {
  const response = await fetch("https://picsum.photos/v2/list?page=3&limit=10");
  const data = await response.json();
  const picArray = data.map((picture) => picture.download_url);
  console.log(picArray);
  return picArray;
}

function ImageSlider() {
  const [images, setImages] = useState([]);
  const [imgIdx, setImgIdx] = useState(0);

  const loadImages = async () => {
    const urls = await fetchImages();
    setImages(urls);
    setImgIdx(0);
  };

  useEffect(() => {
    loadImages();
  }, []);

  const handleLeftArrow = (prev) =>
    setImgIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleRightArrow = (prev) =>
    setImgIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="flex flex-col items-center h-screen bg-black text-white">
      <h1 className="text-9xl font-medium mt-20">Image Slider </h1>
      <div className="flex justify-center my-15">
        <button
          onClick={loadImages}
          className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-3xl px-5 py-2"
        >
          Load Images
        </button>
      </div>
      <div className="flex justify-center">
        <div>
          <button
            className="mr-5 mt-45 px-3 py-3 rounded-4xl hover:bg-indigo-500 text-white bg-indigo-600"
            onClick={handleLeftArrow}
          >
            <FcPrevious />
          </button>
        </div>
        <div className="bg-blue-200 cursor-pointer">
          <img src={images[imgIdx]} alt="" className="w-100 h-100" />
        </div>
        <div>
          <button
            className="ml-5 mt-45 px-3 py-3 rounded-4xl hover:bg-indigo-500 text-white bg-indigo-600"
            onClick={handleRightArrow}
          >
            <FcNext />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
