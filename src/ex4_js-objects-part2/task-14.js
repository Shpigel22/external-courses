/* eslint-disable linebreak-style */
function randomBoldNumber(min, max) {
  // eslint-disable-next-line prefer-const
  let result = min + Math.random() * (max - min + 1);
  return Math.floor(result);
}
module.exports = randomBoldNumber;
