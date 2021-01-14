import React from "react";

function CardFront(props) {
  return (
    <div>
      <h4>{props.name}</h4>
      <p>{props.textfront}</p>
    </div>
  )
};

export default CardFront;
