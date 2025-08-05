/* eslint-disable linebreak-style */
function checkAndAddProperty(str, obj) {
  const result = { ...obj };

  if (!(str in result)) {
    result[str] = 'new';
  }

  return result;
}

module.exports = checkAndAddProperty;
