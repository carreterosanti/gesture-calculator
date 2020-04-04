import React from "react";
import KeyboadKey from "./KeyboardKey";
import KeyboardDeleteKey from "./KeyboardDeleteKey";

export default function Keyboard() {
  return (
    <div
      style={{
        display: "flex",
        height: "60vh",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <div className="items-column-keyboard">
        <KeyboadKey valueKey="1" />
        <KeyboadKey valueKey="4" />
        <KeyboadKey valueKey="7" />
      </div>
      <div className="items-column-keyboard">
        <KeyboadKey valueKey="2" />
        <KeyboadKey valueKey="5" />
        <KeyboadKey valueKey="8" />
      </div>
      <div className="items-column-keyboard">
        <KeyboadKey valueKey="3" />
        <KeyboadKey valueKey="6" />
        <KeyboadKey valueKey="9" />
      </div>

      <div className="items-column-keyboard">
        <KeyboardDeleteKey valueKey="<" />
        <KeyboadKey valueKey="0" tallKey={true} />
      </div>
    </div>
  );
}
