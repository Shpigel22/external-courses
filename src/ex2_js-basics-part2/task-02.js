/* eslint-disable no-plusplus */
function iterationArray(arr) {
  for (let i = 0; i < arr.length; i++) console.log(arr[i]);
  console.log(`Количество элементов в массиве: ${arr.length}`);
}
module.exports = iterationArray;
iterationArray(['яблоко', 'банан', 'апельсин', 1, 2, 3]);
