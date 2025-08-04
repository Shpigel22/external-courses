/* eslint-disable prefer-const */
/* eslint-disable linebreak-style */
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

function deepClone(object) {
  if (typeof object !== 'object' || object == null) {
    return object;
  }
  let result;
  if (Array.isArray(object)) {
    result = [];
  } else {
    result = {};
  }
  Object.keys(object).forEach((key) => {
    result[key] = deepClone(object[key]);
  });
  return result;
}

module.exports = deepClone;

console.log(deepClone(user));
const cloned = deepClone(user);
console.log(cloned.hobby.collection.books === user.hobby.collection.books);
