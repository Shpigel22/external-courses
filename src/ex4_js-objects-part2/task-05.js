function checkMatch(firstString, secondString) {
  if (firstString.toLowerCase().includes(secondString.toLowerCase())) {
    return true;
  }

  return false;
}

module.exports = checkMatch;
