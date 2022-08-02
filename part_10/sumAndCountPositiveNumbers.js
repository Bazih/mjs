export const sumAndCountPositiveNumbers = (array) => {
  if (array.length === 0) {
    throw new Error('Array cannot be empty');
  }

  return array.reduce((acc, val) => {
    if (typeof(val) !== 'number') {
      throw new Error('Array must contain only numbers');
    }

    if (val >= 0) {
      acc['count'] += 1;
      acc['sum'] += val;
    }

    return acc;
  }, { count: 0, sum: 0 });
};
