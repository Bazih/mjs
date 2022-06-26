const Calc = function () {
  let history = [];

  const operationState = {
    '+': (a, b) => a + b,
    '*': (a, b) => a * b,
  };

  this.addOperation = (operation, callbackFn) => {
    if (operationState.hasOwnProperty(operation)) {
      return console.log('Such an operation exists. Please add another.');
    }

    operationState[operation] = callbackFn;
    return console.log('Operation added succesfully');
  };

  this.substract = (string) => {
    const [a, operator, b] = string.split(' ');

    if (!operationState.hasOwnProperty(operator)) {
      return console.log('Operation not found. Please add a new operation.');
    }

    history.push({ operation: operator, operands: [Number(a), Number(b)]});
    return console.log(operationState[operator](Number(a), Number(b)));
  };

  this.history = () => {
    return console.log(history);
  };

  this.clearHistory = () => {
    history = [];
  };
};

const calculator = new Calc()

calculator.substract('31 + 32') // 63
calculator.substract('10 * 2') // 20
calculator.addOperation('/', (a, b) => a / b)
calculator.substract('10 / 2') // 5
calculator.substract('10 - 2') // Not found

calculator.history() /* [{operation: '+', operands: [31,32]}, {operation: '*', 
operands: [10,2]}, {operation: '/', operands: [10,2]}] */

calculator.clearHistory()
calculator.history() // []
