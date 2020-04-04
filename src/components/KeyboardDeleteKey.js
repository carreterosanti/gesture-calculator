import React, { useContext } from "react";
import { ContextCalculator } from "../Context";
import GestureDiv from "./GestureDiv";

export default function KeyboardDeleteKey(props) {
  const {
    deleteLastPartialNumber,
    deleteAllPartialNumber,
    resetFinalResult,
  } = useContext(ContextCalculator);

  return (
    <div className={"keyboard-key regular-size-key display-column-center"}>
      <GestureDiv
        click={deleteLastPartialNumber}
        dragLeft={deleteAllPartialNumber}
        dragUp={resetFinalResult}
      >
        <div className="center-key">
          <h3>{props.valueKey}</h3>
        </div>
      </GestureDiv>
    </div>
  );
}
