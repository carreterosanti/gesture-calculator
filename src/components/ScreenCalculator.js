import React, { useContext } from "react";
import { ContextCalculator } from "../Contexts/Context";
import GestureDiv from "./GestureDiv";

export default function ScreenCalculator() {
  const {
    partialNumber,
    finalResult,
    plusPartialNumber,
    subtractPartialNumber,
    changeLockPartialNumber,
    lockPartialNumber,
  } = useContext(ContextCalculator);

  const lock = lockPartialNumber;
  const colorLockPartialNumber = lock ? "#ed6663" : "#84a9ac";
  console.log(colorLockPartialNumber);
  return (
    <div className="display-column-center" style={{ margin: "auto" }}>
      <div className="center-key" style={{ maxWidth: "90vw", margin: "25px" }}>
        <div className="final-result">{finalResult}</div>
      </div>

      <GestureDiv
        dragUp={() => plusPartialNumber()}
        dragDown={() => subtractPartialNumber()}
        click={() => changeLockPartialNumber()}
      >
        <div
          className="center-key"
          style={{ maxWidth: "60vw", margin: "auto" }}
        >
          <div
            className="partial-result"
            style={{ backgroundColor: colorLockPartialNumber }}
          >
            {partialNumber}
          </div>
        </div>
      </GestureDiv>
    </div>
  );
}
