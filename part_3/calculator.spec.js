import { Calc } from './calculator.js';

describe('Calculator::', () => {
  let calculator;
  
  beforeEach(() => {
    calculator = new Calc();
  });

  describe('addOperation method::', () => {
    it('addOperation should not add exists operation', () => {
      const operation = () => {};
      calculator.addOperation('test', operation);
      const result = calculator.addOperation('test', operation);
      expect(result).toMatch('Such an operation exists. Please add another.');
    });

    it('addOperation should add new operation', () => {
      const operation = () => {};
      const result = calculator.addOperation('test', operation);
      expect(result).toMatch('Operation added succesfully');
    });
  });

  describe('operation method::', () => {
    it('operation should info message if not exists operation', () => {
      const result = calculator.operation('10 - 2');
      expect(result).toMatch('Operation not found. Please add a new operation.');
    });

    it('operation should run and return result of calculation', () => {
      calculator.operation('31 + 32');
      expect(calculator.operation('31 + 32')).toEqual(63);
    });
  });

  describe('history methods::', () => {
    it('history(), when the operations were performed, they are expected to be in the history', () => {
      expect(calculator.history()).toEqual([]);
      calculator.operation('5 + 5');
      const history = calculator.history();
      const expectation = [{ operation: '+', operands: [5,5] }];
      expect(history).toEqual(expectation);
    });

    it('clearHistory(), should clear the history operations', () => {
      calculator.operation('31 + 32');
      expect(calculator.history()).toEqual([{ operation: '+', operands: [31,32] }]);
      calculator.clearHistory();
      expect(calculator.history()).toEqual([]);
    });
  });
});
