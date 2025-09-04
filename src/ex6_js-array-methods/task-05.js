function maped(array, callback) {
  const result = [];
  if (!Array.isArray(array)) {
    return [];
  }

  for (let i = 0; i < array.length; i += 1) {
    const item = array[i];
    const transformArray = callback(item, i, array);
    result.push(transformArray);
  }

  return result;
}

module.exports = maped;
