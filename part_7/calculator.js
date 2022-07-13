function calculator () {
  const display = document.querySelector(".display");
  const buttonsBlock = document.querySelector(".buttons-block");

  let currentOperand = null;
  let previousOperand = null;
  let currentOperation = null;

  let baseAction = {
    "+": () => +currentOperand + +previousOperand,
    "-": () => +previousOperand - +currentOperand,
    "*": () => +previousOperand * +currentOperand,
    "/": () => +previousOperand / +currentOperand,
    "÷": () => +previousOperand / +currentOperand,
  };

  const performAction = () => {
    return baseAction[currentOperation]();
  };

  const twoOperandActions = (keyValue) => {
    previousOperand = currentOperand;
    currentOperand = null;
    currentOperation = keyValue;
    display.innerHTML = '';
  };

  const numberOperation = (keyValue) => {
    currentOperand =
      currentOperand === null ? keyValue : currentOperand + keyValue;
    display.textContent = currentOperand;
  };

  let baseInputOperation = {
    "c": () => {
      currentOperand = null;
      previousOperand = null;
      currentOperation = null;
      display.innerHTML = '';
    },
    "-": (keyValue) => twoOperandActions(keyValue),
    "+": (keyValue) => twoOperandActions(keyValue),
    "*": (keyValue) => twoOperandActions(keyValue),
    "/": (keyValue) => twoOperandActions(keyValue),
    "÷": (keyValue) => twoOperandActions(keyValue),
    "=": () => {
      display.innerHTML = performAction();
    },
    "Enter": () => {
      display.innerHTML = performAction();
    },
    "Backspace": () => {
      currentOperand = currentOperand.slice(0, currentOperand.length - 1);
      display.textContent = currentOperand;
    },
    "0": (value) => numberOperation(value),
    "1": (value) => numberOperation(value),
    "2": (value) => numberOperation(value),
    "3": (value) => numberOperation(value),
    "4": (value) => numberOperation(value),
    "5": (value) => numberOperation(value),
    "6": (value) => numberOperation(value),
    "7": (value) => numberOperation(value),
    "8": (value) => numberOperation(value),
    "9": (value) => numberOperation(value),
  };

  const performInputOperation = keyValue => {
    baseInputOperation[keyValue](keyValue);
  };

  const hundleButtonInteraction = event => {
    const buttonValue = event.target.textContent;
    performInputOperation(buttonValue);
  };

  document.addEventListener("keydown", event => {
    const keyValue = event.key;
    performInputOperation(keyValue);
  });

  buttonsBlock.addEventListener("click", hundleButtonInteraction);

  const addBtn = (value, operation, action) => {
    const nodeContainer = document.querySelector(".added-operators");
    const newBtn = document.createElement("div");
    newBtn.classList.add("button");
    newBtn.textContent = value;
    nodeContainer.appendChild(newBtn);

    if (operation) {
      baseInputOperation = { ...baseInputOperation, ...operation };
    }
    if (action) {
      baseAction = { ...baseAction, ...sqrtAction };
    }
  };

  // adding new buttons and them functionality
  const dotOperation = { ".": (value) => {
    currentOperand = currentOperand + value;
    display.textContent = currentOperand;
  }};
  addBtn(".", dotOperation);

  const sqrtAction = { "sqrt": () => Math.sqrt(+currentOperand) };
  baseAction = { ...baseAction, ...sqrtAction };
  const sqrtOperation = { "sqrt": (value) => {
    currentOperation = value;
    display.innerHTML = performAction();
  }};
  addBtn("sqrt", sqrtOperation, sqrtAction);
};
