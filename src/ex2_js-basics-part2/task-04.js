/* eslint-disable no-self-compare */
/* eslint-disable no-plusplus */
function validater(arr) {
  const a = arr[0];
  if (arr.length === 0) return true;
  for (let i = 1; i < arr.length; i++) {
    const number = arr[i];
    if (a !== a && number !== number) {
      return true;
    }
    if (number !== a) {
      return false;
    }
  }
  return true;
}
module.exports = validater;
console.log(validater([1, 2, 3, 4, 5, 1, 3, 4, 6]));
console.log(validater([5, 5, 5, 5]));
console.log(validater([NaN, 1, 1, 1, 1]));
console.log(validater([0, 0, 0, 0]));
console.log(validater([NaN, NaN, NaN]));
console.log(validater([]));
console.log(validater([null, null, null, undefined]));
