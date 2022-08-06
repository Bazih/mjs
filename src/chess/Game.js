import { COLORS } from './COLORS';
import { GAME_STATES } from './GAME_STATES';

export class Game {
  constructor() {
    this.stateGame = GAME_STATES.continue;
    this.removedFigures = [];
    this.whooseMove = COLORS.w;
    this.allMovesOfStart = 0;
    this.historyMoves = [];
  }
}
