import React, { useContext } from "react";
import { ContextCalculator } from "../Context";

export default function ScreenCalculator() {
  const { partialNumber, finalResult } = useContext(ContextCalculator);

  return (
    <div className="display-column-center">
      <h1
        style={{ padding: "40px", backgroundColor: "#3b6978", color: "white" }}
      >
        {finalResult}
      </h1>
      <h3
        style={{ padding: "20px", backgroundColor: "#84a9ac", color: "white" }}
      >
        {partialNumber}
      </h3>
    </div>
  );
}
