export function sortDesc(array) {
  if (array.length === 0) {
    throw new Error('Array cannot be empty');
  }
  return array.sort((a, b) => {
    if (typeof(a) !== 'number' || typeof(b) !== 'number') {
      throw new Error('Array must contain only numbers');
    }
    return b - a;
  });
};
