/* eslint-disable linebreak-style */
function sum(numberOne, numberTwo) {
  // eslint-disable-next-line prefer-const
  let result = (numberOne * 1000 + numberTwo * 1000) / 1000;
  return +result.toFixed(3);
}
module.exports = sum;
