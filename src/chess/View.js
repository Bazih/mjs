import whitePawn from '../assets/white-pawn.svg';
import blackPawn from '../assets/black-pawn.svg';
import whiteRook from '../assets/white-rook.svg';
import blackRook from '../assets/black-rook.svg';
import whiteKnight from '../assets/white-knight.svg';
import blackKnight from '../assets/black-knight.svg';
import whiteBishop from '../assets/white-bishop.svg';
import blackBishop from '../assets/black-bishop.svg';
import whiteQueen from '../assets/white-queen.svg';
import blackQueen from '../assets/black-queen.svg';
import whiteKing from '../assets/white-king.svg';
import blackKing from '../assets/black-king.svg';
import { bb, bk, bkn, bp, bq, br, wb, wk, wkn, wp, wq, wr, COORDINATES } from './constants';

export class View {

  constructor() {
    this.figuresOnBoardSize = {
      '440': 50,
      '600': 70,
      '760': 90,
    }
    this.x = 20;
    this.y = 37;
    this.arrayTransforms = [];
    this.currentBoardSize = document.querySelector('.board').offsetWidth.toString();
  }

  static setBoardSize(value) {
    this.currentBoardSize = value;
  }

  static getCellSize() {
    return this.figuresOnBoardSize[this.currentBoardSize];
  }

  init() {
    window.onresize = () => {
      const boardSize = document.querySelector('.board').offsetWidth.toString();
      if (boardSize !== this.currentBoardSize) {
        this.rerenderFigures(boardSize);
        this.rerenderAllovedMoves();
      }
    }
  }

  renderFigures(figures) {
    figures.forEach(figure => {
      const position = figure.position;
      const x = this.arrayTransforms[position[1]][position[0]][0];
      const y = this.arrayTransforms[position[1]][position[0]][1];
      figure.uiElement.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  rerenderFigures(boardSize) {
    this.setBoardSize(boardSize);
    this.changeTransform();
    this.renderFigures();
  }

  setBoardSize(value) {
    this.currentBoardSize = value;
  }

  static setFiguresClickListeners(figures, fn) {
    figures.forEach(f => {
      f.uiElement.onclick = () => fn(f);
    })
  }

  changeTransform() {
    let x = this.x;
    let y = this.y;
    this.arrayTransforms = COORDINATES.map((row, rowIndex) => {
      const r = row.map((_, elIndex) => {
        const coords = [x, y];
        x += this.figuresOnBoardSize[this.currentBoardSize];
        return coords;
      });
      y += this.figuresOnBoardSize[this.currentBoardSize];
      x = this.x;
      return r;
    });
  }
}
