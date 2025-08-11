/* eslint-disable linebreak-style */
function counterSymbol(string) {
  const counts = {};

  for (let i = 0; i < string.length; i += 1) {
    const char = string[i];
    counts[char] = (counts[char] || 0) + 1;
  }

  Object.entries(counts).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
}
module.exports = counterSymbol;
