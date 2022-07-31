export function filterByLength(array, start, end) {
  if (array === undefined || start === undefined || end === undefined) {
    throw new Error('The function takes only three arguments');
  }
  if (!Array.isArray(array)) {
    throw new Error('The first argument must contain only array');
  }
  if (typeof(start) !== 'number' || start < 0) {
    throw new Error('The second argument must contain only a positive number or zero');
  }
  if (typeof(end) !== 'number' || end < 0) {
    throw new Error('The third argument must contain only a positive number or zero');
  }
  return array.filter((el) => el.length >= start && el.length <= end);
};
