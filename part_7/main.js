import { Calculator } from './calculator.js';
import { UI } from './ui.js';

function main() {
  const ui = new UI();
  const calculator = new Calculator(ui);
  calculator.init();

  const dotOperation = { '.': (value) => {
    if (!calculator.currentOperand.includes(value)) {
      calculator.setCurrentOperand(calculator.currentOperand + value);
    }
    ui.setDisplayValue(calculator.currentOperand);
  }};

  const sqrtOperation = { 'sqrt': (value) => {
    calculator.setCurrentOperation(value);
    ui.setDisplayValue(calculator.performAction());
  }};

  const sqrtAction = { 'sqrt': () => Math.sqrt(Number(calculator.currentOperand)) };

  calculator.addBtn('.', dotOperation);
  calculator.addBtn('sqrt', sqrtOperation, sqrtAction);
};

window.main = main;
