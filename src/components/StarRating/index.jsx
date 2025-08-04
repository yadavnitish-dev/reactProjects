import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => setRating(index);
  const handleMouseEnter = (index) => setHover(index);
  const handleMouseLeave = () => setHover(rating);

  return (
    <div className="flex flex-col items-center h-screen bg-black text-white">
      <h1 className="text-9xl font-medium mt-40">Star Rating</h1>
      <div className="flex mt-30 gap-2">
        {[...Array(noOfStars)].map((_, index) => (
          <FaStar
            key={index}
            className={
              index < (hover || rating)
                ? "text-yellow-400 text-7xl"
                : "text-indigo-400 text-7xl"
            }
            onClick={() => handleClick(index + 1)}
            onMouseEnter={() => handleMouseEnter(index + 1)}
            onMouseLeave={() => handleMouseLeave()}
          />
        ))}
      </div>
    </div>
  );
}

export default StarRating;
