function select(array, callback) {
  if (!Array.isArray(array)) {
    return [];
  }

  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    const item = array[i];
    if (callback(item, i, array)) {
      result.push(item);
    }
  }

  return result;
}

module.exports = select;
