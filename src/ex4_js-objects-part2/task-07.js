/* eslint-disable linebreak-style */
function compression(string, number) {
  // eslint-disable-next-line prefer-const
  let result = string;

  if (string.length > number) {
    result = `${string.slice(0, number - 1)}\u2026`;
    return result;
  }

  return string;
}

module.exports = compression;
