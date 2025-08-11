/* eslint-disable linebreak-style */
function lowerCaseString(string) {
  const result = string.split(' ');
  let resultString = '';

  for (let i = 0; i < result.length; i += 1) {
    if (i === 0) {
      resultString += result[i].toLowerCase();
    } else {
      result[i] = result[i][0].toUpperCase() + result[i].slice(1).toLowerCase();
      resultString += result[i];
    }
  }

  return resultString;
}
module.exports = lowerCaseString;
