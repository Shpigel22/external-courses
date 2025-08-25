function сompressString(string, number) {
  let result = string;

  if (string.length <= number) {
    return result;
  }

  result = `${string.slice(0, number - 1)}…`;

  return result;
}

module.exports = сompressString;
