import React, { useEffect, useState } from 'react';

async function fetchImages() {
  const response = await fetch("https://picsum.photos/v2/list?page=3&limit=10");
  const data = await response.json();
  const picArray = data.map((picture) => picture.download_url)
  console.log(picArray);
  return picArray;
}

function ImageSlider() {
  const [images, setImages] = useState([]);
  const [imgIdx, setImgIdx] = useState(0);

  const loadImages = async () => {
      const urls = await fetchImages();
      setImages(urls);
      setImgIdx(0)
    };

  useEffect(() => {  
    loadImages();
  }, []);

  const handleLeftArrow = (prev)=>setImgIdx((prev) => prev === 0 ? images.length - 1 : prev - 1)
  const handleRightArrow = (prev)=>setImgIdx((prev) => prev === images.length - 1 ? 0 : prev + 1)


  return (
    <div>
      <div className='flex justify-center my-20'>
        <button onClick={loadImages} className='bg-blue-500 hover:bg-blue-400 text-white rounded-3xl p-2'>Load Images</button>
      </div>
      <div className='flex justify-center'>
        <div>
          <button className="mr-5 mt-45 p-2 rounded-4xl hover:bg-blue-400 text-white bg-blue-500" onClick={handleLeftArrow}>{"<--"}</button>
        </div>
        <div className='bg-blue-200 cursor-pointer'><img src={images[imgIdx]} alt="" className="w-100 h-100" /></div>
        <div>
          <button className='ml-5 mt-45 p-2 rounded-4xl hover:bg-blue-400 text-white bg-blue-500' onClick={handleRightArrow}>{"-->"}</button>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider