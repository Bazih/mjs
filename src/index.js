import { Game } from './chess/Game';
import { getRandomColor } from './chess/helpers';
import './style.scss';

const game = new Game();
const btnNewGame = document.querySelector('#startGame');
const headerText = document.querySelector('.header-text');

const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');
const cancelBtn = document.querySelector('#cancel');
const saveBtn = document.querySelector('#save');
const enteredName = document.querySelector('.player-name');

btnNewGame.onclick = () => {
  modal.style.display = 'block';

  if (game.board) game.clearGame();
  if (!game.firstPlayer.name) {
    headerText.textContent = 'Enter first player name';
  } else {
    headerText.textContent = 'Enter second player name';
  }
};

closeModal.onclick = function() {
  modal.style.display = 'none';
};
cancelBtn.onclick = function() {
  modal.style.display = 'none';
  enteredName.value = '';
  game.setFirstPlayer('', '');
  game.setSecondPlayer('', '');
};
saveBtn.onclick = () => {
  if (!game.firstPlayer.name) {
    const color = getRandomColor();
    game.setFirstPlayer(enteredName.value, color);
    enteredName.value = '';
    headerText.textContent = 'Enter second player name';
    return;
  }
  const color = game.firstPlayer.color === 'w' ? 'b' : 'w';
  game.setSecondPlayer(enteredName.value, color);
  game.run();
  enteredName.value = '';
  modal.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
