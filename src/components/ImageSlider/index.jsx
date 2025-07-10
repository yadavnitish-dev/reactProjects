import React, { useState } from 'react';

async function fetchImages() {
  const response = await fetch("https://picsum.photos/v2/list?page=5&limit=15");
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

  const handleRightArrow = ()=>{
    
  }

  return (
    <div>
      <div className='flex justify-center my-20'>
        <button onClick={handleClick} className='bg-blue-400 text-white rounded-3xl p-2'>Load Images</button>
      </div>
      <div>
        <img src={images[imgIdx]} alt="" className="w-100 h-100 object-cover my-20 mx-130 " />
      </div>
    </div>
  );
}

export default ImageSlider