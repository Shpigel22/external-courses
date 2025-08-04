/* eslint-disable operator-linebreak */
const user = {
  name: 'ilya',
  age: 28,
  hobby: {
    programming: true,
    collection: {
      books: ['Masodov', 'Hunter Tompson'],
    },
  },
};

function getProperty(object, propertyPath) {
  if (typeof object !== 'object' || object == null) {
    return undefined;
  }
  if (typeof propertyPath !== 'string') {
    return undefined;
  }
  const keys = propertyPath.split('.');
  let result = object;
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    if (
      result == null ||
      typeof result !== 'object' ||
      !result.hasOwnProperty(key)
    ) {
      return undefined;
    }
    result = result[key];
  }
  return result;
}

module.exports = getProperty;

console.log(getProperty(user, 'hobby.collection.city'));
console.log(getProperty(user, 'hobby.collection.books'));
