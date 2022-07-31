export const Calc = function () {
  let history = [];

  const operationState = {
    '+': (a, b) => a + b,
    '*': (a, b) => a * b,
  };

  this.addOperation = (operation, callbackFn) => {
    if (operationState.hasOwnProperty(operation)) {
      return 'Such an operation exists. Please add another.';
    }

    operationState[operation] = callbackFn;
    return 'Operation added succesfully';
  };

  this.operation = (string) => {
    const [a, operator, b] = string.split(' ');

    if (!operationState.hasOwnProperty(operator)) {
      return 'Operation not found. Please add a new operation.';
    }

    history.push({ operation: operator, operands: [Number(a), Number(b)]});
    return operationState[operator](Number(a), Number(b));
  };

  this.history = () => {
    return history;
  };

  this.clearHistory = () => {
    history = [];
  };
};
