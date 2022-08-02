export class Game {
  constructor() {
    this.stateGame = 'white win' | 'black win' | 'play continues';
    this.removedFigures = [];
    this.whooseMove = 'white' | 'black';
    this.allMovesOfStart = 0;
    this.historyMoves = [];
  }
}
