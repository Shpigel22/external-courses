function code(value) {
  if (typeof value === 'number' && !Number.isNaN(value)) {
    return 'number';
  }
  if (typeof value === 'string') {
    return 'string';
  }
  return undefined;
}
module.exports = code;

console.log(code(NaN));
console.log(code());
console.log(code(40));
console.log(code('Строка'));
