import React, { useContext } from "react";
import { ContextCalculator } from "../Contexts/Context";
import GestureDiv from "./GestureDiv";

export default function KeyboadKey(props) {
  const {
    addNumberToParcial,
    subtractPartialNumber,
    plusPartialNumber,
  } = useContext(ContextCalculator);
  const valueKey = props.valueKey;

  return (
    <div
      className={
        props.tallKey
          ? "keyboard-key tall-size-key display-column-center"
          : "keyboard-key regular-size-key display-column-center"
      }
    >
      <GestureDiv
        click={() => addNumberToParcial(valueKey)}
        dragUp={() => plusPartialNumber(valueKey)}
        dragDown={() => subtractPartialNumber(valueKey)}
      >
        <div className="center-key">
          <h3>{props.valueKey}</h3>
        </div>
      </GestureDiv>
    </div>
  );
}
