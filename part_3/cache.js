const cache = () => {
  const cache = {};

  const calculate = (a, b) => {
    const key = `${a}${b}`;

    if (cache.hasOwnProperty(key)) {
      return { value: cache[key], fromCache: true };
    }

    const result = 2 ** b;
    cache[key] = result;
    return { value: result, fromCache: false };
  };

  return calculate;
};

const calculate = cache();

console.log(calculate(3, 3));
console.log(calculate(2, 10));
console.log(calculate(2, 10));
