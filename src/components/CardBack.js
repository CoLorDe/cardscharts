import React from "react";

function CardBack(props) {
  return (
    <div>
      <h4>{props.name}</h4>
      <p>{props.textback}</p>
    </div>
  )
};

export default CardBack;
