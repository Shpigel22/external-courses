/* eslint-disable linebreak-style */

function getKeys(obj) {
  Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
}

module.exports = getKeys;
