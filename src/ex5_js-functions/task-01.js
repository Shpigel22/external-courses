function Calculator() {
  let storageValue = 0;

  function add(number) {
    if (number !== undefined) {
      storageValue += number;
    }

    return function nextAdd(nextNumber) {
      if (nextNumber !== undefined) {
        storageValue += nextNumber;
      }

      return nextAdd;
    };
  }

  function subtract(number) {
    if (number !== undefined) {
      storageValue -= number;
    }

    return function nextSubtract(nextNumber) {
      if (nextNumber !== undefined) {
        storageValue -= nextNumber;
      }

      return nextSubtract;
    };
  }

  function divide(number) {
    if (number === 0) {
      console.log('Делить на нуль нельзя!');
    }

    if (number !== undefined) {
      storageValue /= number;
    }

    return function nextDivide(nextNumber) {
      if (nextNumber === 0) {
        console.log('Делить на нуль нельзя!');
      }

      if (nextNumber !== undefined) {
        storageValue /= nextNumber;
      }

      return nextDivide;
    };
  }

  function multiply(number) {
    if (number !== undefined) {
      storageValue *= number;
    }

    return function nextMultiply(nextNumber) {
      if (nextNumber !== undefined) {
        storageValue *= nextNumber;
      }

      return nextMultiply;
    };
  }

  function getResult() {
    return storageValue;
  }

  function reset() {
    storageValue = 0;

    return storageValue;
  }
  return {
    add,
    subtract,
    divide,
    multiply,
    getResult,
    reset,
  };
}

const сalculator = Calculator();

module.exports = сalculator;
