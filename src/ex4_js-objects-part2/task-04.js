/* eslint-disable linebreak-style */
function bigFirstSymbol(string) {
  const result = string[0].toUpperCase() + string.slice(1);

  result.trim();

  return result;
}
module.exports = bigFirstSymbol;
