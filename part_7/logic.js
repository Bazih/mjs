export class Logic {
  constructor(ui) {
    this.ui = ui;

    this.currentOperand = null;
    this.previousOperand = null;
    this.currentOperation = null;
    this.baseAction = {
      "+": () => Number(this.currentOperand) + Number(this.previousOperand),
      "-": () => Number(this.previousOperand) - Number(this.currentOperand),
      "*": () => Number(this.previousOperand) * Number(this.currentOperand),
      "/": () => Number(this.previousOperand) / Number(this.currentOperand),
      "÷": () => Number(this.previousOperand) / Number(this.currentOperand),
    };
    this.baseInputOperation = {
      "c": (_) => {
        this.currentOperand = null;
        this.previousOperand = null;
        this.currentOperation = null;
        this.ui.setDisplayValue('');
      },
      "-": (keyValue) => this.twoOperandActions(keyValue),
      "+": (keyValue) => this.twoOperandActions(keyValue),
      "*": (keyValue) => this.twoOperandActions(keyValue),
      "/": (keyValue) => this.twoOperandActions(keyValue),
      "÷": (keyValue) => this.twoOperandActions(keyValue),
      "=": (_) => {
        this.ui.setDisplayValue(this.performAction());
      },
      "Enter": (_) => {
        this.ui.setDisplayValue(this.performAction());
      },
      "Backspace": (_) => {
        this.currentOperand = this.currentOperand.slice(0, this.currentOperand.length - 1);
        this.ui.setDisplayValue(this.currentOperand);
      },
      "0": (value) => this.numberOperation(value),
      "1": (value) => this.numberOperation(value),
      "2": (value) => this.numberOperation(value),
      "3": (value) => this.numberOperation(value),
      "4": (value) => this.numberOperation(value),
      "5": (value) => this.numberOperation(value),
      "6": (value) => this.numberOperation(value),
      "7": (value) => this.numberOperation(value),
      "8": (value) => this.numberOperation(value),
      "9": (value) => this.numberOperation(value),
    };
  }

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
    this.baseInputOperation[keyValue](keyValue);
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
}
