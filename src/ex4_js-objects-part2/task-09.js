function setWordAfterNumber(string, word, number) {
  const arrayWord = string.split(' ');
  let resultString = '';

  for (let i = 0; i < arrayWord.length; i += 1) {
    resultString += `${arrayWord[i]} `;
    if (i === number) {
      resultString += `${word} `;
    }
  }

  if (number >= arrayWord.length) {
    resultString += word;
  }

  return (resultString = resultString.trim());
}

module.exports = setWordAfterNumber;
