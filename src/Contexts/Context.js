import React, { useState } from "react";

const ContextCalculator = React.createContext();

function ContextProvider(props) {
  const [partialNumber, setPartialNumber] = useState("");
  const [finalResult, setFinalResult] = useState(0);
  const [lockPartialNumber, setLockPartialNumber] = useState(false);

  function changeLockPartialNumber() {
    setLockPartialNumber((prevLock) => !prevLock);
  }

  function plusPartialNumber(lastNumberOfPartial) {
    const partialNumberToSubtract = parseInt(
      "" + partialNumber + lastNumberOfPartial
    );
    if (!lockPartialNumber) setPartialNumber("");
    if (!isNaN(partialNumberToSubtract))
      setFinalResult(() => finalResult + partialNumberToSubtract);
  }

  function subtractPartialNumber(lastNumberOfPartial) {
    const partialNumberToSubtract = parseInt(
      "" + partialNumber + lastNumberOfPartial
    );
    if (!lockPartialNumber) setPartialNumber("");
    if (!isNaN(partialNumberToSubtract))
      setFinalResult(() => finalResult - partialNumberToSubtract);
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
        lockPartialNumber,
        changeLockPartialNumber,
      }}
    >
      {props.children}
    </ContextCalculator.Provider>
  );
}

export { ContextProvider, ContextCalculator };
