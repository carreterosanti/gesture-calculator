import React from "react";
import ScreenCalculator from "./ScreenCalculator";
import { Link } from "react-router-dom";
import Keyboard from "./Keyboard";
import { ContextProvider } from "../Contexts/Context";
import TopRightLinkIcon from "./TopRightLinkIcon";

export default function MainCalculator() {
  return (
    <ContextProvider>
      <TopRightLinkIcon to="/info" imgUrl="./images/info-icon.png" />

      <div
        className="display-column-center"
        style={{
          minWidth: "100vw",
          height: "100vh",
          minHeight: "-webkit-fill-available",
          justifyContent: "space-between",
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        <ScreenCalculator />
        <Keyboard />
      </div>
    </ContextProvider>
  );
}
