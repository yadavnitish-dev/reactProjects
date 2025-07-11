import React, { useState } from 'react';

async function fetchImages() {
  const response = await fetch("https://picsum.photos/v2/list?page=5&limit=5");
  const data = await response.json();
  const picArray = data.map((picture) => picture.download_url)
  console.log(picArray);
  return picArray;
}

function ImageSlider() {
  const [images, setImages] = useState([]);
  const [imgIdx, setImgIdx] = useState(0);

  const handleClick = async () => {
    const urls = await fetchImages();
    setImages(urls);
  };

  const handleLeftArrow = (prev)=>setImgIdx((prev) => prev === 0 ? images.length - 1 : prev - 1)
  const handleRightArrow = (prev)=>setImgIdx((prev) => prev === images.length - 1 ? 0 : prev + 1)
  return (
    <div>
      <div className='flex justify-center my-20'>
        <button onClick={()=>handleClick()} className='bg-blue-400 text-white rounded-3xl p-2'>Load Images</button>
      </div>
      <div className='flex justify-center'>
        <div className="pt-45 mr-5" onClick={()=>handleLeftArrow(imgIdx)}>{"<--"}</div>
        <div className='bg-blue-200'><img src={images[imgIdx]} alt="" className="w-100 h-100" /></div>
        <div className='pt-45 ml-5' onClick={()=>handleRightArrow(imgIdx)}>{"-->"}</div>
      </div>
    </div>
  );
}

export default ImageSlider