import { Logic } from './logic.js';
import { UI } from './ui.js';

export class Calculator {
  constructor() {
    this.ui = new UI();
    this.logic = new Logic(this.ui);
  }
  
  init() {
    document.addEventListener("keydown", event => {
      const keyValue = event.key;
      this.logic.performInputOperation(keyValue);
    });

    this.ui.buttonsBlock.addEventListener("click", this.logic.hundleButtonInteraction);
  }

  addBtn(value, operation, action) {
    this.ui.addBtn(value);
    if (operation) {
      this.logic.addInputOperation(operation);
    }
    if (action) {
      this.logic.addAction(action);
    }
  }
};
