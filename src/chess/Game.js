import { Board } from './Board';
import { COLORS, COORDINATES, FIGURE_NAMES, GAME_STATES } from './constants';

export class Game {
  constructor() {
    this.stateGame = GAME_STATES.continue;
    this.removedFigures = [];
    this.whooseMove = COLORS.w;
    this.allMovesOfStart = 0;
    this.historyMoves = [];

    this.firstPlayer = { name: '', color: '' };
    this.secondPlayer = { name: '', color: '' };
    this.board = null;
    this.arrayTransforms = [];

    this.figuresOnBoardSize = {
      '440': 50,
      '600': 70,
      '760': 90,
    };
    this.x = 20;
    this.y = 37;
    this.currentBoardSize = document.querySelector('.board').offsetWidth.toString();
    this.allowedMoves = [];
  }

  setFirstPlayer(name, color) {
    this.firstPlayer = { name: name, color: color };
  }

  setSecondPlayer(name, color) {
    this.secondPlayer = { name: name, color: color };
  }

  clearGame() {
    this.stateGame = GAME_STATES.continue;
    this.removedFigures = [];
    this.whooseMove = COLORS.w;
    this.allMovesOfStart = 0;
    this.historyMoves = [];
    this.firstPlayer = { name: '', color: '' };
    this.secondPlayer = { name: '', color: '' };
    this.clearUI()
    this.board.clearBoard();
    this.board = null;
    this.arrayTransforms = [];
    this.allowedMoves = [];
  }

  // ui
  clearUI() {
    this.board.figuresInstance.forEach(figure => figure.uiElement.remove());
    this.setGamerName({ name: 'gamer1', color: 'w'});
    this.setGamerName({ name: 'gamer2', color: 'b' });
    this.renderCountMoves('');
    this.clearHistory();
  }

  run() {
    this.setGamerName(this.firstPlayer);
    this.setGamerName(this.secondPlayer);
    this.board = new Board();
    this.board.makeFigures();
    this.nextStep();

    this.renderFigures();  
    this.setFiguresClickListeners();

    window.onresize = () => {
      const boardSize = document.querySelector('.board').offsetWidth.toString();
      if (boardSize !== this.board.currentBoardSize) {
        this.rerenderFigures(boardSize);
        this.rerenderAllovedMoves();
      }
    }
  }

  nextStep() {
    this.board.figuresInstance.forEach(el => {
      if (el.color !== this.whooseMove) {
        this.removeCursor(el);
        return;
      }
      this.setCursor(el);
    }, []);

    this.changeTransform();
    this.renderCountMoves(this.allMovesOfStart);
  }

  // ui
  setGamerName({ name, color }) {
    const span = document.querySelector(`#${color}GamerName`);
    span.textContent = name;
  }

  changeWhooseMove(color) {
    this.whooseMove = COLORS.w === color ? COLORS.b : COLORS.w;
  }

  addToHistory(figure, from, to) {
    const obj = { name: figure, from: from, to: to }
    this.historyMoves.push(obj);

    this.renderHistory(obj);
  }

  isPawnTransform(figure) {
    return figure.name === FIGURE_NAMES.pawn &&
      (figure.position[1] === 7 || figure.position[1] === 0);
  }

  moveFigure(figure) {
    console.log(figure.position, figure.isActive);
    if (figure.color !== this.whooseMove) return;
    if (!!this.allowedMoves.length && figure.isActive) {
      this.removeAllowedMoves();
      figure.isActive = false;
      return;
    }
    if (!!this.allowedMoves.length && !figure.isActive) {
      const activeFigure = this.board.getFigureIsActive(true);
      activeFigure.isActive = false;
      this.removeAllowedMoves();
    }

    const moves = figure.getAllowedMoves(this.board.allFields);
    this.renderMoves(figure, moves, (position) => {
      this.#changeCountMoves();
      const name = `${figure.color}-${figure.name}`;

      this.destroyFigure(position);

      this.board.updateAllFields(name, figure.position, position);
      this.addToHistory(name, figure.position, position);
      this.changeWhooseMove(figure.color);

      const x = this.arrayTransforms[position[1]][position[0]][0];
      const y = this.arrayTransforms[position[1]][position[0]][1];
      figure.uiElement.style.transform = `translate(${x}px, ${y}px)`;

      figure.position = position;
      if (figure.name === FIGURE_NAMES.pawn) {
        figure.isFirstStep = false;
      }
      figure.isActive = false;

      // pawn -> new figure
      if (this.isPawnTransform(figure)) {
        this.modalNewFigure(figure, this.changePawnToNewFigure);
        figure.uiElement.remove();
      }

      this.removeAllowedMoves();
      this.nextStep();
    });
  }

  changePawnToNewFigure = (figure, name) => {
    const newFigure = this.board.changePawn(name, figure);
    const [x, y] = newFigure.position;
    const xt = this.arrayTransforms[y][x][0];
    const yt = this.arrayTransforms[y][x][1];
    newFigure.uiElement.style.transform = `translate(${xt}px, ${yt}px)`;
    newFigure.uiElement.onclick = () => this.moveFigure(newFigure);
  }

  destroyFigure(position) {
    const figure = this.board.getFigureByCoords(position);
    if (figure) {
      this.board.destroyFigure(position);
      figure.uiElement.remove();
    }
  }

  // ui
  renderHistory({ name, from, to }) {
    const move = document.createElement('div');
    const [color, nameText] = name.split('-');
    const posFrom = COORDINATES[from[1]][from[0]];
    const posTo = COORDINATES[to[1]][to[0]];

    move.innerHTML = `${color} ${nameText.toLowerCase()} ${posFrom} --> ${posTo}`;
    const score = document.querySelector('.scoresheet')
    score.appendChild(move);
    score.scrollTop = score.scrollHeight;
  }

  // ui
  clearHistory() {
    const node = document.querySelector('.scoresheet');
    while (node.firstChild) {
      node.removeChild(node.lastChild);
    }
  }

  // ui
  modalNewFigure(figure, fn) {
    const modal = document.querySelector('#modalNewFigures');
    modal.style.display = 'block';
    document.querySelectorAll('#newFigure').forEach(el => {
      el.onclick = () => {
        modal.style.display = 'none';
        fn(figure, el.dataset.name);
      }
    });
  }

  // ui
  renderFigures() {
    this.board.figuresInstance.forEach(figure => {
      const position = figure.position;
      const x = this.arrayTransforms[position[1]][position[0]][0];
      const y = this.arrayTransforms[position[1]][position[0]][1];
      figure.uiElement.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  // ui
  rerenderFigures(boardSize) {
    this.setBoardSize(boardSize);
    this.changeTransform();
    this.renderFigures();
  }

  // ui
  setFiguresClickListeners() {
    this.board.figuresInstance.forEach(f => {
      f.uiElement.onclick = () => this.moveFigure(f);
    })
  }

  // ui
  changeTransform() {
    let x = this.x;
    let y = this.y;
    this.arrayTransforms = this.board.allFields.map((row, rowIndex) => {
      const r = row.map((_, elIndex) => {
        const coords = [x, y];
        x += this.figuresOnBoardSize[this.currentBoardSize];
        return coords;
      });
      y += this.figuresOnBoardSize[this.currentBoardSize];
      x = this.x;
      return r;
    });
  }

  // ui
  renderMoves(figure, moves, fn) {
    figure.isActive = true;
    moves.forEach(m => {
      const moveCell = document.createElement('div');
      moveCell.className = 'moves-figure';
      moveCell.style.cursor = 'pointer';
      const x = this.arrayTransforms[m[1]][m[0]][0];
      const y = this.arrayTransforms[m[1]][m[0]][1];
      moveCell.style.transform = `translate(${x}px, ${y}px)`;
      moveCell.onclick = () => fn(m);
      document.body.appendChild(moveCell);
      this.allowedMoves.push({ position: m, el: moveCell });
    });
  }

  // ui
  rerenderAllovedMoves() {
    this.allowedMoves.forEach(({ position, el }) => {
      const x = this.arrayTransforms[position[1]][position[0]][0];
      const y = this.arrayTransforms[position[1]][position[0]][1];
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  // ui
  removeAllowedMoves() {
    this.allowedMoves.forEach(({ position, el }) => el.remove());
    this.allowedMoves = [];
  }

  #changeCountMoves() {
    this.allMovesOfStart += 1;
  }

  // ui
  renderCountMoves(count) {
    const el = document.querySelector('.history-wrapper .header');
    const [text, _] = el.innerText.split(' ');
    el.innerText = `${text} (${count})`;
  }

  // ui
  setCursor(figure) {
    figure.uiElement.style.cursor = 'pointer';
  }

  // ui
  removeCursor(figure) {
    figure.uiElement.style.cursor = 'auto';
  }

  // ui
  setBoardSize(value) {
    this.currentBoardSize = value;
  }


  isCheck() {
    // TODO проверка на шах
  }
  isCheckmate() {
    // TODO проверка мата
  }
}
