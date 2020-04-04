import React, { useState } from "react";

const ContextCalculator = React.createContext();

function ContextProvider(props) {
  const [partialNumber, setPartialNumber] = useState("");
  const [finalResult, setFinalResult] = useState(0);

  function plusPartialNumber(lastNumberOfPartial) {
    const partailNumberToSubtract = parseInt(
      "" + partialNumber + lastNumberOfPartial
    );
    setPartialNumber("");
    setFinalResult(() => finalResult + partailNumberToSubtract);
  }

  function subtractPartialNumber(lastNumberOfPartial) {
    const partailNumberToSubtract = parseInt(
      "" + partialNumber + lastNumberOfPartial
    );
    setPartialNumber("");
    setFinalResult(() => finalResult - partailNumberToSubtract);
  }

  function addNumberToParcial(newNumber) {
    setPartialNumber((prevPartialNumber) => {
      return "" + prevPartialNumber + newNumber;
    });
  }

  function deleteLastPartialNumber() {
    setPartialNumber((prevPartialNumber) => {
      return prevPartialNumber.substring(0, prevPartialNumber.length - 1);
    });
  }

  function deleteAllPartialNumber() {
    setPartialNumber("");
  }

  function resetFinalResult() {
    setFinalResult(0);
  }

  return (
    <ContextCalculator.Provider
      value={{
        partialNumber,
        addNumberToParcial,
        finalResult,
        subtractPartialNumber,
        plusPartialNumber,
        deleteLastPartialNumber,
        deleteAllPartialNumber,
        resetFinalResult,
      }}
    >
      {props.children}
    </ContextCalculator.Provider>
  );
}

export { ContextProvider, ContextCalculator };
