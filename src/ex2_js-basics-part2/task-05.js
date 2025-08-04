export function maximumArrayNumber(arr) {
  return Math.max(...arr);
}

module.exports = maximumArrayNumber;

console.log(maximumArrayNumber([1, 2, 3, 449, 5, 6, 8, 15, 32, 111]));
console.log(maximumArrayNumber([1, 2, 555, 4, 5, 6, 8, 15, 32, 111]));
