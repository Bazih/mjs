import { filterByLength } from './filterByLength.js';

describe('filterByLength', () => {

  const fruits = ['orange', 'apple', 'banana', ''];
  
  it('should return the result when valid arguments are passed', () => {
    expect(filterByLength(fruits, 0, 5)).toEqual(['apple', '']);
    expect(filterByLength(fruits, 6, 6)).toEqual(['orange', 'banana']);
  });

  it('should return an error when there are less than three arguments', () => {
    expect(() => filterByLength()).toThrow('The function takes only three arguments');
    expect(() => filterByLength(fruits)).toThrow('The function takes only three arguments');
    expect(() => filterByLength(fruits, 5)).toThrow('The function takes only three arguments');
  });

  it('should return an error when first argument is not array', () => {
    expect(() => filterByLength(NaN, 0, 5)).toThrow('The first argument must contain only array');
    expect(() => filterByLength('', 0, 5)).toThrow('The first argument must contain only array');
    expect(() => filterByLength({ a: 'a' }, 0, 5)).toThrow('The first argument must contain only array');
    expect(() => filterByLength(true, 0, 5)).toThrow('The first argument must contain only array');
  });

  it('should return an error when the second argument is not positive number or zero', () => {
    expect(() => filterByLength(fruits, '', 5)).toThrow('The second argument must contain only a positive number or zero');
    expect(() => filterByLength(fruits, -1, 5)).toThrow('The second argument must contain only a positive number or zero');
    expect(() => filterByLength(fruits, [], 5)).toThrow('The second argument must contain only a positive number or zero');
    expect(() => filterByLength(fruits, { a: 'a' }, 5)).toThrow('The second argument must contain only a positive number or zero');
    expect(() => filterByLength(fruits, () => {}, 5)).toThrow('The second argument must contain only a positive number or zero');
  });

  it('should return an error when the third argument is not positive number or zero', () => {
    expect(() => filterByLength(fruits, 0, '')).toThrow('The third argument must contain only a positive number or zero');
    expect(() => filterByLength(fruits, 0, -5)).toThrow('The third argument must contain only a positive number or zero');
    expect(() => filterByLength(fruits, 0, [])).toThrow('The third argument must contain only a positive number or zero');
    expect(() => filterByLength(fruits, 0, { a: 'a' })).toThrow('The third argument must contain only a positive number or zero');
    expect(() => filterByLength(fruits, 0, () => {})).toThrow('The third argument must contain only a positive number or zero');
  });
});
