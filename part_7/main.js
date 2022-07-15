import { Calculator } from './calculator.js';

function main() {
  const calculator = new Calculator();
  calculator.init();

  const dotOperation = { '.': (value) => {
    if (!calculator.currentOperand.includes(value)) {
      calculator.setCurrentOperand(calculator.currentOperand + value);
    }
    calculator.ui.setDisplayValue(calculator.currentOperand);
  }};

  const sqrtOperation = { 'sqrt': (value) => {
    calculator.setCurrentOperation(value);
    calculator.ui.setDisplayValue(calculator.performAction());
  }};

  const sqrtAction = { 'sqrt': () => Math.sqrt(Number(calculator.currentOperand)) };

  calculator.addBtn('.', dotOperation);
  calculator.addBtn('sqrt', sqrtOperation, sqrtAction);
};

window.main = main;
