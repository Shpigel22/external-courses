function checkLenghtStringFirst(stringone, stringtwo) {
  const result = stringone.length > stringtwo.length ? stringone : stringtwo;

  return result;
}

const checkLenghtStringSecond = (stringone, stringtwo) =>
  stringone.length > stringtwo.length ? stringone : stringtwo;

module.exports = checkLenghtStringFirst;
module.exports = checkLenghtStringSecond;
