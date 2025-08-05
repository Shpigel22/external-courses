/* eslint-disable operator-linebreak */
function getProperty(object, propertyPath) {
  if (object === null || typeof object !== 'object') {
    return undefined;
  }

  if (typeof propertyPath !== 'string') {
    return undefined;
  }

  const keys = propertyPath.split('.');
  let result = object;

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];

    if (
      result === null ||
      typeof result !== 'object' ||
      !result.hasOwnProperty(key)
    ) {
      return undefined;
    }
    result = result[key];
  }

  return result;
}

module.exports = getProperty;
