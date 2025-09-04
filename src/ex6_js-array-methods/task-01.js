function sliced(array, begin, end) {
  if (!Array.isArray(array)) {
    return [];
  }

  const result = [];
  let start = begin === undefined ? 0 : begin;
  let finish = end === undefined ? array.length : end;

  if (begin < 0) {
    start = array.length + begin;
  }

  if (end < 0) {
    finish = array.length + end;
  }

  start = Math.max(start, 0);
  finish = Math.min(finish, array.length);
  finish = Math.max(finish, 0);

  if (start < 0 || finish < 0 || start >= finish) {
    return [];
  }

  for (let i = start; i < finish; i += 1) {
    result.push(array[i]);
  }

  return result;
}

module.exports = sliced;
