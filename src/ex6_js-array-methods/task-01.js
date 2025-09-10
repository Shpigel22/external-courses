function sliced(array, begin, end) {
  const result = [];
  let start = begin ?? 0;
  let finish = end ?? array.length;

  if (begin < 0) {
    start = array.length + begin;
  }

  if (end < 0) {
    finish = array.length + end;
  }

  start = Math.max(start, 0);
  finish = Math.min(finish, array.length);
  finish = Math.max(finish, start);

  for (let i = start; i < finish; i += 1) {
    result.push(array[i]);
  }

  return result;
}

module.exports = sliced;
