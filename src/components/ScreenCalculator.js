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
        <div
          style={{
            padding: "30px",
            backgroundColor: "#3b6978",
            color: "white",
            maxWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontWeight: "600",
            fontSize: "xx-large",
          }}
        >
          {finalResult}
        </div>
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
            style={{
              padding: "15px",
              backgroundColor: colorLockPartialNumber,
              color: "white",
              maxWidth: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              minWidth: "30px",
              minHeight: "30px",
              fontSize: "x-large",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            {partialNumber}
          </div>
        </div>
      </GestureDiv>
    </div>
  );
}
