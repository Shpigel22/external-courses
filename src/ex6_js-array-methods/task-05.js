function maped(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i += 1) {
    const item = array[i];
    const transform = callback(item, i, array);
    result.push(transform);
  }

  return result;
}

module.exports = maped;
