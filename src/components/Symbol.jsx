import React, { useState } from "react";
import Triangle from "./Triangle";
import Circle from "./Circle";
import Star from "./Star";
import Cross from "./Cross";

function Symbol(props) {
  
  if (props.shape === "Star") {
    return <Star Color={props.color} />;
  } else if (props.shape === "Cross") {
    return <Cross Color={props.color} />;
  } else if (props.shape === "Circle") {
    return <Circle Color={props.color} />;
  } else {
    return <Triangle Color={props.color} />;
  }
}

export default Symbol;
