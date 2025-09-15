function reduced(array, callback, initialValue) {
  let previousValue = initialValue === undefined ? array[0] : initialValue;
  let i = initialValue === undefined ? 1 : 0;

  for (i; i < array.length; i += 1) {
    const currentItem = array[i];
    previousValue = callback(previousValue, currentItem, i, array);
  }

  return previousValue;
}

module.exports = reduced;
