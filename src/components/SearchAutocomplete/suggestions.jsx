import React from "react";

const Suggestions = ({ data, handleClick }) => {
  return (
    <ul>
      {data && data.length
        ? data.map((item, index) => (
            <li onClick={handleClick} key={index}>
              {item}
            </li>
          ))
        : ""}
    </ul>
  );
};

export default Suggestions;
