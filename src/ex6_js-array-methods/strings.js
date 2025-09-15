function checkLenghtStringFirst(stringOne, stringTwo) {
  const result = stringOne.length > stringTwo.length ? stringOne : stringTwo;

  return result;
}

const checkLenghtStringSecond = (stringOne, stringTwo) =>
  stringOne.length > stringTwo.length ? stringOne : stringTwo;

module.exports = checkLenghtStringFirst;
module.exports = checkLenghtStringSecond;
