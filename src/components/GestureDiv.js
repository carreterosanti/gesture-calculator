import React, { useState } from "react";

/* Recibe como children el componente a renderizar dentro, y mediante props, las funciones a ejecutar en click, dragUp, dragRight, dragLeft y dragDown */
export default function GestureDiv(props) {
  const [startPositionDragX, setStartPositionDragX] = useState();
  const [startPositionDragY, setStartPositionDragY] = useState();
  const minPixelToDrag = 20;

  const handleClick = (event) => {
    console.log(props.click());
  };

  const handleDragStart = (event) => {
    setStartPositionDragY(event.screenY);
    setStartPositionDragX(event.screenX);
  };

  function handleGesture(endPositionDragX, endPositionDragY) {
    if (endPositionDragY - startPositionDragY < -minPixelToDrag) {
      props.dragUp();
    } else if (endPositionDragY - startPositionDragY > minPixelToDrag) {
      props.dragDown();
    }
    if (endPositionDragX - startPositionDragX < -minPixelToDrag) {
      props.dragLeft();
    } else if (endPositionDragX - startPositionDragX > minPixelToDrag) {
      props.dragRight();
    }
  }

  const handleDragEnd = (event) => {
    event.preventDefault();
    const endPositionDragY = event.screenY;
    const endPositionDragX = event.screenX;
    handleGesture(endPositionDragX, endPositionDragY);
  };

  const handleTouchStart = (event) => {
    const [touch, secondElement] = event.changedTouches;
    setStartPositionDragX(touch.screenX);
    setStartPositionDragY(touch.screenY);
  };
  const handleTouchEnd = (event) => {
    const [touch, secondElement] = event.changedTouches;
    const endPositionDragY = touch.screenY;
    const endPositionDragX = touch.screenX;
    handleGesture(endPositionDragX, endPositionDragY);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {props.children}
    </div>
  );
}

function emptyFunction() {}

GestureDiv.defaultProps = {
  click: emptyFunction,
  dragLeft: emptyFunction,
  dragRight: emptyFunction,
  dragUp: emptyFunction,
  dragDown: emptyFunction,
};
