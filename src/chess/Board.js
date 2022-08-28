import { Pawn } from './Pawn';
import { Rook } from './Rook';
import { Bishop } from './Bishop';
import { Knight } from './Knight';
import { King } from './King';
import { Queen } from './Queen';
import { FIELDS } from './constants';

export class Board {
  constructor() {
    this.allFields = FIELDS;
    this.figuresInstance = [];
  }

  makeFigures() {
    const classes = { Pawn, Rook, Bishop, Knight, Queen, King };
    this.allFields.forEach((row, rowIndex) => {
      row.forEach((el, elIndex) => {
        if (el) {
          const [color, name] = el.split('-');
          const position = [elIndex, rowIndex];
          const figure = new classes[name](color, name, position);
          this.figuresInstance.push(figure);
        }
      });
    })
  }

  updateAllFields(figure, whereFrom, whereTo) {
    this.allFields = this.allFields.map((row, rowIndex) => {
      return row.map((el, elIndex) => {
        if (elIndex === whereTo[0] && rowIndex === whereTo[1]) el = figure;
        if (elIndex === whereFrom[0] && rowIndex === whereFrom[1]) el = '';
        return el;
      });
    });
  }

  getFigureByCoords(position) {
    return this.figuresInstance.find(figure =>
      figure.position[0] === Number(position[0]) && figure.position[1] === Number(position[1]));
  }

  getFigureIsActive(bool) {
    return this.figuresInstance.find(figure => figure.isActive === bool);
  }

  destroyFigure(position) {
    this.figuresInstance = this.figuresInstance.filter(figure =>
      figure.position[0] !== Number(position[0]) || figure.position[1] !== Number(position[1]));
  }

  changePawn(name, figure) {
    const classes = { Rook, Bishop, Knight, Queen};
    const newFigure = new classes[name](figure.color, name, figure.position);
    this.destroyFigure(figure.position);
    this.figuresInstance.push(newFigure);
    return newFigure;
  }

  clearBoard() {
    this.allFields = FIELDS;
    this.figuresInstance = [];
  }
}
