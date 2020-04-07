import React from "react";
import ScreenCalculator from "./ScreenCalculator";
import { Link } from "react-router-dom";
import Keyboard from "./Keyboard";
import { ContextProvider } from "../Contexts/Context";
import TopRightLinkIcon from "./TopRightLinkIcon";

export default function MainCalculator() {
  return (
    <ContextProvider>
      <TopRightLinkIcon
        to="/gesture-calculator/info"
        imgUrl="./images/info-icon.png"
      />

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
