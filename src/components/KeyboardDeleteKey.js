import React, { useContext, useState } from "react";
import { ContextCalculator } from "../Context";
import GestureDiv from "./GestureDiv";

export default function KeyboardDeleteKey(props) {
  const {
    deleteLastPartialNumber,
    deleteAllPartialNumber,
    resetFinalResult,
  } = useContext(ContextCalculator);

  return (
    <GestureDiv
      click={deleteLastPartialNumber}
      dragLeft={deleteAllPartialNumber}
      dragUp={resetFinalResult}
    >
      <div className={"keyboard-key regular-size-key display-column-center"}>
        <div>{props.valueKey}</div>
      </div>
    </GestureDiv>
  );
}
