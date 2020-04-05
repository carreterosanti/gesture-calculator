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
    <div
      className="display-column-center"
      style={{ maxWidth: "80vw", margin: "auto" }}
    >
      <h1
        style={{
          padding: "40px",
          backgroundColor: "#3b6978",
          color: "white",
          maxWidth: "100%",
        }}
      >
        {finalResult}
      </h1>
      <GestureDiv
        dragUp={() => plusPartialNumber()}
        dragDown={() => subtractPartialNumber()}
        click={() => changeLockPartialNumber()}
      >
        <div
          className="center-key"
          style={{ maxWidth: "60vw", margin: "auto" }}
        >
          <h3
            style={{
              padding: "20px",
              backgroundColor: colorLockPartialNumber,
              color: "white",
              maxWidth: "100%",
              overflow: "hidden",
            }}
          >
            {partialNumber}
          </h3>
        </div>
      </GestureDiv>
    </div>
  );
}
