function setLowerCaseToString(string) {
  const arrayWords = string.trim().split(' ');
  let resultString = arrayWords[0].toLowerCase();

  for (let i = 1; i < arrayWords.length; i += 1) {
    arrayWords[i] = arrayWords[i][0].toUpperCase() + arrayWords[i].slice(1).toLowerCase();
    resultString += arrayWords[i];
  }

  return resultString;
}

module.exports = setLowerCaseToString;

console.log(setLowerCaseToString('  я так не думаю  '));
