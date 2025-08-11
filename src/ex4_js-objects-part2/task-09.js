/* eslint-disable linebreak-style */
function stringInjection(string, word, number) {
  const result = string.split(' ');
  let resultString = '';

  for (let i = 0; i < result.length; i += 1) {
    resultString += `${result[i]} `;
    if (i === number) {
      resultString += `${word} `;
    }
  }

  if (number >= result.length) {
    resultString += word;
  }
  resultString = resultString.trim();
  return resultString;
}

module.exports = stringInjection;
