import { Figure } from './Figure';

export class Bishop extends Figure {
  constructor(color, name, position) {
    super(color, name, position);
  }

  getAllowedMoves(fields = []) {
    const [x, y] = this.position;
    const direction = [
      [x - 1, y - 1], [x + 1, y - 1], [x - 1, y + 1], [x + 1, y + 1],
      [x - 2, y - 2], [x + 2, y - 2], [x - 2, y + 2], [x + 2, y + 2],
      [x - 3, y - 3], [x + 3, y - 3], [x - 3, y + 3], [x + 3, y + 3],
      [x - 4, y - 4], [x + 4, y - 4], [x - 4, y + 4], [x + 4, y + 4],
      [x - 5, y - 5], [x + 5, y - 5], [x - 5, y + 5], [x + 5, y + 5],
      [x - 6, y - 6], [x + 6, y - 6], [x - 6, y + 6], [x + 6, y + 6],
      [x - 7, y - 7], [x + 7, y - 7], [x - 7, y + 7], [x + 7, y + 7],
    ];
    const strokeLimiters = [];
    const allowedMoves = [];

    direction.forEach(xy => {
      if (xy[1] > 7 || xy[1] < 0 || xy[0] > 7 || xy[0] < 0) return;

      if (!!strokeLimiters.length) {
        let isStop = false;
        for (let i = 0; i < strokeLimiters.length; i++) {
          const sx = strokeLimiters[i][0] - x;
          const sy = strokeLimiters[i][1] - y;
          const cx = xy[0] - x;
          const cy = xy[1] - y;
          if (sx < 0 && sy < 0 && cx < 0 && cy < 0) isStop = true;
          if (sx > 0 && sy > 0 && cx > 0 && cy > 0) isStop = true;
          if (sx < 0 && sy > 0 && cx < 0 && cy > 0) isStop = true;
          if (sx > 0 && sy < 0 && cx > 0 && cy < 0) isStop = true;
        }
        if (isStop) return;
      }
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
      strokeLimiters.push(xy);
    });
    return allowedMoves;
  }


}
