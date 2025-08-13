function convertToBigFirstSymbol(string) {
  const wordsArray = string.split(' ');
  let resultString = '';

  for (let i = 0; i < wordsArray.length; i += 1) {
    if (wordsArray[i] === '') {
      // eslint-disable-next-line no-continue
      continue;
    } else {
      wordsArray[i] = wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1);
      resultString = `${resultString}${wordsArray[i]} `;
    }
  }

  resultString = resultString.trim();

  return resultString;
}

module.exports = convertToBigFirstSymbol;
