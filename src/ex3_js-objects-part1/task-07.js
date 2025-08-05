/* eslint-disable prefer-const */
/* eslint-disable linebreak-style */
function deepClone(object) {
  if (object === null || object === undefined || typeof object !== 'object') {
    return object;
  }

  let result;

  if (Array.isArray(object)) {
    result = [];
  } else {
    result = {};
  }

  Object.entries(object).forEach(([key, value]) => {
    result[key] = deepClone(value);
  });

  return result;
}

module.exports = deepClone;
