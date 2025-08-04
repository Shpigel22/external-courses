/* eslint-disable linebreak-style */
const user = {
  name: 'ilya',
  age: 30,
  isAdmin: true,
};
function getKeys(obj) {
  Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
}

module.exports = getKeys;

console.log(getKeys(user));
