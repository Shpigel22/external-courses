function reduced(array, callback, initialValue) {
  let previousValue;
  let i;

  if (initialValue === undefined) {
    previousValue = array[0];
    i = 1;
  } else {
    previousValue = initialValue;
    i = 0;
  }

  for (i; i < array.length; i += 1) {
    const currentItem = array[i];
    previousValue = callback(previousValue, currentItem, i, array);
  }

  return previousValue;
}

module.exports = reduced;
