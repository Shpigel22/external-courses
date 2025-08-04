/* eslint-disable linebreak-style */
const user = {
  name: 'ilya',
  age: 30,
  isAdmin: true,
  sex: 'male',
};

function cloneObject(obj) {
  const copy = { ...obj };
  console.log(copy);
  return copy;
}
module.exports = cloneObject;

console.log(cloneObject(user));
