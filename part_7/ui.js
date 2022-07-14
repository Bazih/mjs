export class UI {
  constructor() {
    this.display = document.querySelector(".display");
    this.buttonsBlock = document.querySelector(".buttons-block");
    this.newButtonsContainer = document.querySelector(".added-operators");
  }

  setDisplayValue(value) {
    this.display.innerHTML = value;
  }

  addBtn(value) {
    const newBtn = document.createElement("div");
    newBtn.classList.add("button");
    newBtn.textContent = value;
    this.newButtonsContainer.appendChild(newBtn);
  }
}
