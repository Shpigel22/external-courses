function convertToBigFirstSymbol(string) {
  const wordsArray = string.split(' ');
  let resultString = '';

  for (let i = 0; i < wordsArray.length; i += 1) {
    if (wordsArray[i]) {
      const word = wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1);

      if (resultString) {
        resultString += ' ';
      }

      resultString += word;
    }
  }

  return resultString;
}

module.exports = convertToBigFirstSymbol;
