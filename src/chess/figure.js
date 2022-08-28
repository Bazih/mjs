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
import { bb, bk, bkn, bp, bq, br, wb, wk, wkn, wp, wq, wr } from './constants';

export class Figure {
  constructor(color, name, position) {
    this.color = color;
    this.name = name;
    this.uiElement = this.#createFigure(color, name);
    this.position = position;
    this.isActive = false;
  }

  getAllowedMoves() {
    console.log('allowed moves');
  }

  #createFigure(color, name) {
    const img = document.createElement('img');
    img.className = 'figure';
    switch (`${color}-${name}`) {
      case wp:
        img.src = whitePawn;
        break;
      case wr:
        img.src = whiteRook;
        break;
      case wkn:
        img.src = whiteKnight;
        break;
      case wb:
        img.src = whiteBishop;
        break;
      case wq:
        img.src = whiteQueen;
        break;
      case wk:
        img.src = whiteKing;
        break;
      case bp:
        img.src = blackPawn;
        break;
      case br:
        img.src = blackRook;
        break;
      case bkn:
        img.src = blackKnight;
        break;
      case bb:
        img.src = blackBishop;
        break;
      case bq:
        img.src = blackQueen;
        break;
      case bk:
        img.src = blackKing;
        break;
    }
    document.body.appendChild(img);
    return img;
  }
}
