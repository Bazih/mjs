import { COLORS } from './constants';
import { Figure } from './Figure';

export class Pawn extends Figure {
  constructor(color, name, position) {
    super(color, name, position);
    this.isFirstStep = true;
  }

  getAllowedMoves(fields = []) {
    const [x, y] = this.position;
    const yDirection = this.color === COLORS.w ? -1 : 1;
    const yFirstStepDirection = this.color === COLORS.w ? -2 : 2;
    const defaultMove = [[x, y + yDirection], [x - 1, y + yDirection], [x + 1, y + yDirection]];
    if (this.isFirstStep) defaultMove.push([x, y + yFirstStepDirection]);
    const allowedMoves = [];

    defaultMove.forEach(xy => {
      if (xy[1] > 7 || xy[1] < 0 || xy[0] > 7 || xy[0] < 0) return;

      const result = fields[xy[1]][xy[0]];
      if (result === undefined) return;
      if (!result.length) {
        // проверяем диагонали, есть ли там вражеские фигуры
        if (xy[0] === x - 1 && xy[1] === y + yDirection || xy[0] === x + 1 && xy[1] === y + yDirection) return;
        // проверяем нет ли перед пешкой фигуры, в случае, когда пешка еще не ходила
        if (xy[1] === y + yFirstStepDirection) {
          const res = fields[y + yDirection][xy[0]];
          if (!!res.length) return;
        }
        allowedMoves.push(xy);
        return;
      }
      const [color, _] = result.split('-');
      if (!!result.length && xy[1] === y + yDirection && (xy[0] === x - 1 || xy[0] === x + 1) && this.color !== color) {
        allowedMoves.push(xy);
      }
    });

    return allowedMoves;
  }
}
