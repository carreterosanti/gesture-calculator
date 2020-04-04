import React, { useContext, useState } from "react";
import { ContextCalculator } from "../Context";
import GestureDiv from "./GestureDiv";

export default function KeyboadKey(props) {
  const {
    addNumberToParcial,
    subtractPartialNumber,
    plusPartialNumber,
  } = useContext(ContextCalculator);
  const valueKey = props.valueKey;

  return (
    <GestureDiv
      click={() => addNumberToParcial(valueKey)}
      dragUp={() => plusPartialNumber(valueKey)}
      dragDown={() => subtractPartialNumber(valueKey)}
    >
      <div
        className={
          props.tallKey
            ? "keyboard-key tall-size-key display-column-center"
            : "keyboard-key regular-size-key display-column-center"
        }
      >
        <div>{props.valueKey}</div>
      </div>
    </GestureDiv>
  );
}
