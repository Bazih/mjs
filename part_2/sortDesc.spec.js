import { sortDesc } from './sortDesc.js';

describe('sortDesc::', () => {
  it('should return an error when the array contains not only numbers', () => {
    const badArray = [-5, 3, 0, 'test', true, { a: '4' }, '55'];
    expect(() => sortDesc(badArray)).toThrow('Array must contain only numbers');
  });

  it('should return an error when the array is empty', () => {
    const badArray = [];
    expect(() => sortDesc(badArray)).toThrow('Array cannot be empty');
  });

  it('when the array consists of numbers, should return the result', () => {
    const array = [-20, -10, 0, 10, 20, 30];
    const expected = [30, 20, 10, 0, -10, -20];
    expect(sortDesc(array)).toEqual(expected);
  });
});
