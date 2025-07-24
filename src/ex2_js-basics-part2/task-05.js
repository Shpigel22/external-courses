export function maximumArrayNumber(arr) {
  let arrMax = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    if (arrMax <= arr[i]) {
      arrMax = arr[i];
    }
  }
  return arrMax;
}
module.exports = maximumArrayNumber;
console.log(maximumArrayNumber([1, 2, 3, 449, 5, 6, 8, 15, 32, 111]));
console.log(maximumArrayNumber([1, 2, 555, 4, 5, 6, 8, 15, 32, 111]));
