import { Figure } from './figure';

export class Pawn extends Figure {
  constructor(color, name) {
    super(color, name);
    
    /**
     * Property informing about transformation to other types of shapes:
     * rook, bishop, knight, queen
     */
    this.transformTo = true;
  }
}
