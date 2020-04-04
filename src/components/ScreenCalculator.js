import React, { useContext } from "react";
import { ContextCalculator } from "../Context";
import GestureDiv from "./GestureDiv";

export default function ScreenCalculator() {
  const {
    partialNumber,
    finalResult,
    plusPartialNumber,
    subtractPartialNumber,
  } = useContext(ContextCalculator);

  return (
    <div className="display-column-center">
      <h1
        style={{ padding: "40px", backgroundColor: "#3b6978", color: "white" }}
      >
        {finalResult}
      </h1>
      <GestureDiv
        dragUp={() => plusPartialNumber()}
        dragDown={() => subtractPartialNumber()}
      >
        <div className="center-key">
          <h3
            style={{
              padding: "20px",
              backgroundColor: "#84a9ac",
              color: "white",
            }}
          >
            {partialNumber}
          </h3>
        </div>
      </GestureDiv>
    </div>
  );
}
