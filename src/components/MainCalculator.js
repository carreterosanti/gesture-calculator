import React from "react";
import ScreenCalculator from "./ScreenCalculator";
import Keyboard from "./Keyboard";
import { ContextProvider } from "../Context";

export default function MainCalculator() {
  return (
    <ContextProvider>
      <div
        className="display-column-center"
        style={{
          minWidth: "100vw",
          minHeight: "100vh",
        }}
      >
        <ScreenCalculator />
        <Keyboard />
      </div>
    </ContextProvider>
  );
}
