function Calculator() {
  let storageValue = 0;

  function add(number) {
    if (number !== undefined) {
      storageValue += number;
    } else {
      return add;
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
    } else {
      return subtract;
    }

    return function nextSubtract(nextNumber) {
      if (nextNumber !== undefined) {
        storageValue -= nextNumber;
      }

      return nextSubtract;
    };
  }

  function divide(number) {
    if (number !== undefined) {
      if (number === 0) {
        console.log('Делить на нуль нельзя!');
      } else {
        storageValue /= number;
      }
    } else {
      return divide;
    }

    return function nextDivide(nextNumber) {
      if (nextNumber !== undefined) {
        if (nextNumber === 0) {
          console.log('Делить на нуль нельзя!');
        } else {
          storageValue /= nextNumber;
        }
      }

      return nextDivide;
    };
  }

  function multiply(number) {
    if (number !== undefined) {
      storageValue *= number;
    } else {
      return multiply;
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
