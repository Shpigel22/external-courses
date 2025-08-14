function reversedString(string) {
  const result = string.split('');
  let resultString = '';

  for (let i = string.length - 1; i >= 0; i -= 1) {
    resultString += result[i];
  }

  return resultString;
}

module.exports = reversedString;
