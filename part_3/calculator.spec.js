import { Calc } from './calculator.js';

describe('Calculator', () => {
  let calculator;
  
  beforeEach(() => {
    calculator = new Calc();
  });

  describe('addOperation', () => {
    it('should add new operation', () => {
      const operation = () => {};
      const result = calculator.addOperation('test', operation);
      expect(result).toMatch('Operation added succesfully');
    });

    it('should not add exists operation', () => {
      const operation = () => {};
      calculator.addOperation('test', operation);
      const result = calculator.addOperation('test', operation);
      expect(result).toMatch('Such an operation exists. Please add another.');
    });
  });

  describe('operation', () => {
    it('should run and return result of calculation', () => {
      calculator.operation('31 + 32');
      expect(calculator.operation('31 + 32')).toEqual(63);
    });

    it('should info message if not exists operation', () => {
      const result = calculator.operation('10 - 2');
      expect(result).toMatch('Operation not found. Please add a new operation.');
    });
  });

  describe('history', () => {
    it('should added performed operation in the history', () => {
      expect(calculator.history()).toEqual([]);
      calculator.operation('5 + 5');
      const history = calculator.history();
      const expectation = [{ operation: '+', operands: [5,5] }];
      expect(history).toEqual(expectation);
    });

    it('should clear the history operations', () => {
      calculator.operation('31 + 32');
      expect(calculator.history()).toEqual([{ operation: '+', operands: [31,32] }]);
      calculator.clearHistory();
      expect(calculator.history()).toEqual([]);
    });
  });
});
