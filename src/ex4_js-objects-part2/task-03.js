function deleteSpace(string) {
  let result = string;
  if (string.startsWith(' ')) {
    result = result.slice(1);
  }

  if (result.endsWith(' ')) {
    result = result.slice(0, result.length - 1);
  }

  return result;
}

module.exports = deleteSpace;
