function uniqueNumber(number) {
  let isPrime = true;
  if (number > 1000) {
    return 'Данные неверны';
  }
  if (number === 0 || number === 1) {
    return 'Не причисляется ни к простым, ни к составным числам';
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime
    ? `Число ${number} - простое число`
    : `Число ${number} - составное число`;
}
module.exports = uniqueNumber;

console.log(uniqueNumber(1001));
console.log(uniqueNumber(13));
console.log(uniqueNumber(14));
console.log(uniqueNumber(0));
console.log(uniqueNumber(1));
