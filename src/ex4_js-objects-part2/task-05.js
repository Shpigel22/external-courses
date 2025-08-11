/* eslint-disable linebreak-style */
function searchMatch(firstString, secondString) {
  if (firstString.indexOf(secondString) !== -1) {
    return true;
  }

  return false;
}
module.exports = searchMatch;
