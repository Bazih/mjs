import { UI } from './ui.js';

export class Calculator {
  constructor() {
    this.ui = new UI();
    this.currentOperand = null;
    this.previousOperand = null;
    this.currentOperation = null;
    this.baseAction = {
      '+': () => Number(this.currentOperand) + Number(this.previousOperand),
      '-': () => Number(this.previousOperand) - Number(this.currentOperand),
      '*': () => Number(this.previousOperand) * Number(this.currentOperand),
      '/': () => Number(this.previousOperand) / Number(this.currentOperand),
      '÷': () => Number(this.previousOperand) / Number(this.currentOperand),
    };
    this.baseInputOperation = {
      'c|C': (_) => {
        this.currentOperand = null;
        this.previousOperand = null;
        this.currentOperation = null;
        this.ui.setDisplayValue('');
      },
      '-|+|*|/|÷': (keyValue) => this.twoOperandActions(keyValue),
      '=': (_) => {
        this.ui.setDisplayValue(this.performAction());
      },
      'Enter': (_) => {
        this.ui.setDisplayValue(this.performAction());
      },
      'Backspace': (_) => {
        this.currentOperand = this.currentOperand.slice(0, this.currentOperand.length - 1);
        this.ui.setDisplayValue(this.currentOperand);
      },
      '0|1|2|3|4|5|6|7|8|9': (value) => this.numberOperation(value),
      'default': () => console.log('Incorrect input'),
    };
  }
  
  switchCase = (obj = {}, str = '') =>
    obj[Object.keys(obj).find(ele => ele.toString().split('|').includes(str.toString())) || 'default'];

  twoOperandActions(keyValue) {
    this.previousOperand = this.currentOperand;
    this.currentOperand = null;
    this.currentOperation = keyValue;
    this.ui.setDisplayValue('');
  };

  numberOperation(keyValue) {
    this.currentOperand = this.currentOperand === null
      ? keyValue
      : this.currentOperand + keyValue;
    this.ui.setDisplayValue(this.currentOperand);
  };

  performAction() {
    return this.baseAction[this.currentOperation]();
  };

  performInputOperation = keyValue => {
    this.switchCase(this.baseInputOperation, keyValue)(keyValue);
  };

  hundleButtonInteraction = event => {
    const buttonValue = event.target.textContent;
    this.performInputOperation(buttonValue);
  };

  addAction(action) {
    this.baseAction = { ...this.baseAction, ...action };
  };

  addInputOperation(operation) {
    this.baseInputOperation = { ...this.baseInputOperation, ...operation };
  };

  setCurrentOperation(value) {
    this.currentOperation = value;
  };

  setCurrentOperand(value) {
    this.currentOperand = value;
  };

  setPreviousOperand(value) {
    this.previousOperand = value;
  };

  init() {
    document.addEventListener("keydown", event => {
      const keyValue = event.key;
      this.performInputOperation(keyValue);
    });

    this.ui.buttonsBlock.addEventListener("click", this.hundleButtonInteraction);
  }

  addBtn(value, operation, action) {
    this.ui.addBtn(value);
    if (operation) {
      this.addInputOperation(operation);
    }
    if (action) {
      this.addAction(action);
    }
  }
};
