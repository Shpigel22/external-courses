/* eslint-disable linebreak-style */
function checkPrototypeValue(propName, object) {
  if (object.hasOwnProperty(propName)) {
    return undefined;
  }

  const proto = Object.getPrototypeOf(object);

  if (proto !== null && proto.hasOwnProperty(propName)) {
    return proto[propName];
  }
  return undefined;
}
module.exports = checkPrototypeValue;
