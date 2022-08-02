export const cache = () => {
  const cache = {};

  const calculate = (a, b) => {
    const key = `${a}${b}`;

    if (cache.hasOwnProperty(key)) {
      return { value: cache[key], fromCache: true };
    }

    const result = a ** b;
    cache[key] = result;
    return { value: result, fromCache: false };
  };

  return calculate;
};
