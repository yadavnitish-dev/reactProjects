import React, { useState } from 'react'

function RandomColor() {
  
  const [color, setColor] = useState("#ffffff");
  const [typeOfColor, setTypeOfColor] = useState("hex");

  const handleHexColor = ()=>{
    const hex="12345678abcdef";
    let hexColor =`#`;
    for(let i=0;i<6;i++){
      const random = Math.floor(Math.random()*14);
      hexColor = hexColor + hex[random];
    }
    setColor(hexColor);
  }

  const handleRGBColor = ()=>{
    const r= Math.floor(Math.random()*256);
    const g= Math.floor(Math.random()*256);
    const b= Math.floor(Math.random()*256);
    const rgbColor = `rgb(${r},${g},${b})`;
    setColor(rgbColor);
  }
  
  return (
    <div>
      <div className='h-screen w-screen flex flex-col justify-center' style ={{ backgroundColor: color }}>
        <div className='text-black my-2 text-center text-5xl' style ={{ backgroundColor: color }} >Current Color = {color} </div>
        <button className='p-2 rounded bg-black text-white mx-150 my-2' onClick={()=>handleHexColor()}>Generate Hex Color</button>
        <button className='p-2 rounded bg-black text-white mx-150 my-2' onClick={()=>handleRGBColor()}>Generate RGB Color</button>
      </div>
    </div>
  )
}

export default RandomColor