function checkPrototypeValue(propName, object) {
  const proto = Object.getPrototypeOf(object);

  return proto?.[propName];
}

module.exports = checkPrototypeValue;
