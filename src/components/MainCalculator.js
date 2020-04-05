import React from "react";
import ScreenCalculator from "./ScreenCalculator";
import Keyboard from "./Keyboard";
import { ContextProvider } from "../Contexts/Context";

export default function MainCalculator() {
  return (
    <ContextProvider>
      <div
        className="display-column-center"
        style={{
          minWidth: "100vw",
          minHeight: "-webkit-fill-available",
          height: "-webkit-fill-available",
          justifyContent: "space-between",
        }}
      >
        <ScreenCalculator />
        <Keyboard />
      </div>
    </ContextProvider>
  );
}
