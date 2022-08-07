import { wp, wr, wkn, wb, wq, wk, bp, br, bkn, bb, bq, bk } from './SHAPE_COLOR_NAMES';

export class Board {
  constructor() {
    this.allFields = [
      [br, bkn, bb, bq, bk, bb, bkn, br],
      [bp, bp, bp, bp, bp, bp, bp, bp],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      [wp, wp, wp, wp, wp, wp, wp, wp],
      [wr, wkn, wb, wq, wk, wb, wkn, wr],
    ];
  }
}
