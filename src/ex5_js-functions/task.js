function Calculator() {
  let storageValue = 0;

  function add(number) {
    if (number !== undefined) {
      storageValue += number;
    }

    return add;
  }

  function subtract(number) {
    if (number !== undefined) {
      storageValue -= number;
    }

    return subtract;
  }

  function divide(number) {
    if (number !== undefined) {
      if (number === 0) {
        console.log('Делить на нуль нельзя!');
      } else {
        storageValue /= number;
      }
    }

    return divide;
  }

  function multiply(number) {
    if (number !== undefined) {
      storageValue *= number;
    }

    return multiply;
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

const calculator = Calculator();

module.exports = calculator;
