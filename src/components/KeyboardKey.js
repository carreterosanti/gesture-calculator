import React, { useContext, useState } from "react";
import { ContextCalculator } from "../Context";

export default function KeyboadKey(props) {
  const {
    addNumberToParcial,
    subtractPartialNumber,
    plusPartialNumber,
  } = useContext(ContextCalculator);
  const [startPositionDragY, setStartPositionDragY] = useState();

  const handleTouchStart = (event) => {
    console.log(event.touches);
    //setStartPositionDragY(event.screenY);
  };
  const handleTouchEnd = (event) => {
    console.log(event.touches);
    //setStartPositionDragY(event.screenY);
  };

  const handleDragStart = (event) => {
    console.log("Start: " + event.screenY);
    setStartPositionDragY(event.screenY);
  };
  const handleDragEnd = (event) => {
    event.preventDefault();
    console.log("End: " + event.screenY);
    const endPositionDragY = event.screenY;
    console.log(
      endPositionDragY - startPositionDragY > 0
        ? subtractPartialNumber(props.valueKey)
        : plusPartialNumber(props.valueKey)
    );
  };

  const handleClick = (event) => {
    addNumberToParcial(props.valueKey);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={
        props.tallKey
          ? "keyboard-key tall-size-key display-column-center"
          : "keyboard-key regular-size-key display-column-center"
      }
    >
      <div>{props.valueKey}</div>
    </div>
  );
}
