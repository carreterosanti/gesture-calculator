import React, { useState } from "react";

const ContextCalculator = React.createContext();

function ContextProvider(props) {
  const [partialNumber, setParcialNumber] = useState("");
  const [finalResult, setFinalResult] = useState(0);

  function plusPartialNumber(lastNumberOfPartial) {
    const partailNumberToSubtract = parseInt(
      "" + partialNumber + lastNumberOfPartial
    );
    setParcialNumber("");
    setFinalResult(() => finalResult + partailNumberToSubtract);
  }

  function subtractPartialNumber(lastNumberOfPartial) {
    const partailNumberToSubtract = parseInt(
      "" + partialNumber + lastNumberOfPartial
    );
    setParcialNumber("");
    setFinalResult(() => finalResult - partailNumberToSubtract);
  }

  function addNumberToParcial(newNumber) {
    setParcialNumber((prevParcialNumber) => {
      return "" + prevParcialNumber + newNumber;
    });
  }

  return (
    <ContextCalculator.Provider
      value={{
        partialNumber,
        addNumberToParcial,
        finalResult,
        subtractPartialNumber,
        plusPartialNumber,
      }}
    >
      {props.children}
    </ContextCalculator.Provider>
  );
}

export { ContextProvider, ContextCalculator };
