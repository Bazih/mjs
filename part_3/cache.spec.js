import { cache } from './cache.js';

describe('cache', () => {
  let calculate;

  beforeEach(() => {
    calculate = cache();
  });

  it('should return not cache data', () => {
    const expected = { value: 27, fromCache: false };
    expect(calculate(3, 3)).toEqual(expected);
  });

  it('should return cache data', () => {
    calculate(2, 10);
    const expected = { value: 1024, fromCache: true };
    expect(calculate(2, 10)).toEqual(expected);
  });
});
