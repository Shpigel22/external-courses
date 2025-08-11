/* eslint-disable linebreak-style */
function bigFirstSymbol(string) {
  const result = string.split(' ');
  let resultString = '';

  for (let i = 0; i < result.length; i += 1) {
    result[i] = result[i][0].toUpperCase() + result[i].slice(1);
    resultString = `${resultString + result[i]} `;
  }

  resultString = resultString.trim();
  return resultString;
}
module.exports = bigFirstSymbol;
