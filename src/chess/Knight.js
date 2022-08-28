import { Figure } from './Figure';

export class Knight extends Figure {
  constructor(color, name, position) {
    super(color, name, position);
  }

  getAllowedMoves(fields = []) {
    const [x, y] = this.position;
    const direction = [
      [x - 1, y - 2], [x + 1, y - 2], [x - 2, y - 1], [x + 2, y - 1],
      [x - 1, y + 2], [x + 1, y + 2], [x - 2, y + 1], [x + 2, y + 1],
    ];
    const allowedMoves = [];

    direction.forEach(xy => {
      if (xy[1] > 7 || xy[1] < 0 || xy[0] > 7 || xy[0] < 0) return;
      
      const result = fields[xy[1]][xy[0]];
      if (result === undefined) return;
      if (!result.length) {
        allowedMoves.push(xy);
        return;
      }
      const [color, _] = result.split('-');
      if (!!result.length && this.color !== color) {
        allowedMoves.push(xy);
      }
    })

    return allowedMoves;
  }
}
