/* eslint-disable linebreak-style */
const user = {
  name: 'ilya',
  age: 30,
  isAdmin: true,
};

function checkPropertyObject(str, obj) {
  return obj.hasOwnProperty(str);
}

module.exports = checkPropertyObject;

console.log(checkPropertyObject('name', user));
console.log(checkPropertyObject('age', user));
console.log(checkPropertyObject('sex', user));
