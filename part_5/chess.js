class Figure {
  constructor(color, name) {
    this.color = color;
    this.name = name;
  }

  getAllowedMoves() {
    console.log('allowed moves');
  }
}

class Pawn extends Figure {
  constructor(color, name) {
    super(color, name);
    
    /**
     * Property informing about transformation to other types of shapes:
     * rook, bishop, knight, queen
     */
    this.transformTo = true;
  }
}

class Rook extends Figure {
  constructor(color, name) {
    super(color, name);
  }
}

class Bishop extends Figure {
  constructor(color, name) {
    super(color, name);
  }
}

class Knight extends Figure {
  constructor(color, name) {
    super(color, name);
  }
}

class King extends Figure {
  constructor(color, name) {
    super(color, name);
  }
}

class Queen extends Figure {
  constructor(color, name) {
    super(color, name);
  }
}

class Board {
  constructor() {
    this.coordinates = [
      'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8',
      'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8',
      'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8',
      'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8',
      'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8',
      'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8',
      'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8',
    ];
    this.allFields = [
      ['br', 'bkn', 'bb', 'bq', 'bk', 'bb', 'bkn', 'br'],
      ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
      ['wr', 'wkn', 'wb', 'wq', 'wk', 'wb', 'wkn', 'wr'],
    ];
  }
}

class Game {
  constructor() {
    this.stateGame = 'white win' | 'black win' | 'play continues';
    this.removedFigures = [];
    this.whooseMove = 'white' | 'black';
    this.allMovesOfStart = 0;
    this.historyMoves = [];
  }
}
