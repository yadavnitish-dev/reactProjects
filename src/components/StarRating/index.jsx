import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function StarRating({noOfStars=5}) {

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index)=> setRating(index);
  const handleMouseEnter = (index)=> setHover(index);
  const handleMouseLeave = ()=> setHover(rating);


  return (
    <div className='flex justify-center my-100'>
        {
          [...Array(noOfStars)].map((_,index)=>
          <FaStar key={index} className={index<(hover || rating) ? 'text-yellow-500 text-7xl' : 'text-gray-400 text-7xl'}
            onClick={()=>handleClick(index+1)}
            onMouseEnter={()=>handleMouseEnter(index+1)}
            onMouseLeave={()=>handleMouseLeave()}
          />)
        }
    </div>
  )
}

export default StarRating