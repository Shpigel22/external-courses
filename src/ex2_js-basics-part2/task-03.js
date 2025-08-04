/* eslint-disable operator-linebreak */
function evenOdd(arr) {
  let even = 0;
  let odd = 0;
  let zero = 0;
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    const number = arr[i];
    if (typeof number === 'number' && !isNaN(number)) {
      if (number === 0) {
        zero += 1;
      } else if (number % 2 === 0) {
        even += 1;
      } else {
        odd += 1;
      }
    }
  }
  result.push(even, odd, zero);
  console.log(
    `Количество четных: ${even};` +
      `Количество нечетных: ${odd};` +
      // eslint-disable-next-line comma-dangle
      `Количество нулей: ${zero}`
  );
  console.log(result);
  return result;
}
module.exports = evenOdd;
evenOdd([1, 1, 2, 0, null, 3, 4, NaN, 8, 'even']);
