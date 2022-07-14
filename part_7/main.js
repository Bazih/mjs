import { Calculator } from './calculator.js';

function main() {
  const calculator = new Calculator();
  calculator.init();

  const dotOperation = { ".": (value) => {
    calculator.logic.setCurrentOperand(calculator.logic.currentOperand + value);
    calculator.ui.setDisplayValue(calculator.logic.currentOperand);
  }};

  const sqrtOperation = { 'sqrt': (value) => {
    calculator.logic.setCurrentOperation(value);
    calculator.ui.setDisplayValue(calculator.logic.performAction());
  }};

  const sqrtAction = { 'sqrt': () => Math.sqrt(Number(calculator.logic.currentOperand)) };

  calculator.addBtn('.', dotOperation);
  calculator.addBtn('sqrt', sqrtOperation, sqrtAction);
};

window.main = main;
