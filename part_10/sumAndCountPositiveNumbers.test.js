import { sumAndCountPositiveNumbers } from './sumAndCountPositiveNumbers.js';

describe('sumAndCountPositiveNumbers', () => {
  it('should return the result when the array consists of numbers', () => {
    const array = [-91, -93, -45, 67, 96, 40, -34, 96, -42, 58];
    const expected = { count: 5, sum: 357 };
    expect(sumAndCountPositiveNumbers(array)).toEqual(expected);
  });

  it('should return an error when the array contains not only numbers', () => {
    const badArray = [-5, 3, 0, 'test', true, { a: '4' }, '55'];
    expect(() => sumAndCountPositiveNumbers(badArray)).toThrow('Array must contain only numbers');
  });

  it('should return an error when the array is empty', () => {
    const badArray = [];
    expect(() => sumAndCountPositiveNumbers(badArray)).toThrow('Array cannot be empty');
  });
});
