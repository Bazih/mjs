export class Calculator {
  constructor(ui) {
    this.ui = ui;
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
      'clear': (_) => {
        this.currentOperand = null;
        this.previousOperand = null;
        this.currentOperation = null;
        this.ui.setDisplayValue('');
      },
      'baseOperations': (keyValue) => this.twoOperandActions(keyValue),
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
      'numbers': (value) => this.numberOperation(value),
    };
  }
  
  switchCase = (obj = {}, str = '') => {
    if ('0123456789'.includes(str)) return obj['numbers'];
    if ('-|+|*|/|÷'.includes(str)) return obj['baseOperations'];
    if ('c|C'.includes(str)) return obj['clear'];
    return obj[str]
      ? obj[str]
      : () => console.log('Incorrect input');
  };

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
