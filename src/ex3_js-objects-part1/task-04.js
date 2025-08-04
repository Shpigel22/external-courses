/* eslint-disable linebreak-style */
const user = {
  name: 'ilya',
  age: 30,
  isAdmin: true,
};

function checkAndAddProperty(str, obj) {
  const result = { ...obj };
  if (!(str in result)) {
    result[str] = 'new';
  }
  return result;
}

module.exports = checkAndAddProperty;
console.log(checkAndAddProperty('city', user));
console.log(checkAndAddProperty('age', user));
