export const FIGURE_NAMES = {
  pawn: 'Pawn',
  rook: 'Rook',
  knight: 'Knight',
  bishop: 'Bishop',
  queen: 'Queen',
  king: 'King',
};

export const COLORS = {
  b: 'black',
  w: 'white',
};

export const GAME_STATES = {
  wWin: 'white win',
  bWin: 'black win',
  continue: 'play continue',
};

export const COORDINATES = [
  ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8'],
  ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
  ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
  ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
  ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
  ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
  ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
  ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
];

export const wp = `${COLORS.w}-${FIGURE_NAMES.pawn}`;
export const wr = `${COLORS.w}-${FIGURE_NAMES.rook}`;
export const wkn = `${COLORS.w}-${FIGURE_NAMES.knight}`;
export const wb = `${COLORS.w}-${FIGURE_NAMES.bishop}`;
export const wq = `${COLORS.w}-${FIGURE_NAMES.queen}`;
export const wk = `${COLORS.w}-${FIGURE_NAMES.king}`;
export const bp = `${COLORS.b}-${FIGURE_NAMES.pawn}`;
export const br = `${COLORS.b}-${FIGURE_NAMES.rook}`;
export const bkn = `${COLORS.b}-${FIGURE_NAMES.knight}`;
export const bb = `${COLORS.b}-${FIGURE_NAMES.bishop}`;
export const bq = `${COLORS.b}-${FIGURE_NAMES.queen}`;
export const bk = `${COLORS.b}-${FIGURE_NAMES.king}`;

export const FIELDS = [
  [br, bkn, bb, bq, bk, bb, bkn, br],
  [bp, bp, bp, bp, bp, bp, bp, bp],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  [wp, wp, wp, wp, wp, wp, wp, wp],
  [wr, wkn, wb, wq, wk, wb, wkn, wr],
];
