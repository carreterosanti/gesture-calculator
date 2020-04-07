import React from "react";

export default function InfoSectionsCalculator() {
  return (
    <div className="display-column-center fit-content info-sections-div">
      <div className="final-result fit-content info-final-result">
        Resultado Final
      </div>
      <div className="partial-result fit-content info-partial-result">
        Dígitos Parciales
      </div>
      <div
        className="keyboard-key"
        style={{ padding: "50px 20px", width: "80%", textAlign: "center" }}
      >
        Teclado
      </div>
    </div>
  );
}
