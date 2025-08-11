/* eslint-disable linebreak-style */
function deleteSpace(string) {
  let result = string;
  if (string.charAt(0) === ' ') {
    result = result.substring(1);
  }

  if (string.charAt(string.length - 1) === ' ') {
    result = result.substring(0, result.length - 1);
  }

  return result;
}
module.exports = deleteSpace;
