'use strict';
//selecting elements
const score0 = document.querySelector('#score0');
const score1 = document.querySelector('#score1');
const diceEl = document.querySelector('.dice');
const roll = document.querySelector('.roll');
const current0 = document.getElementById('current0');
const current1 = document.getElementById('current1');
const player0 = document.getElementById('pl0');
const player1 = document.getElementById('pl1');
const hold = document.querySelector('.hold');
const newgame = document.querySelector('.new');
let playing, currentscore, activeplayer, scores;

//starting condition
const starting = function () {
  playing = true;
  currentscore = 0;
  activeplayer = 0;
  scores = [0, 0];

  current0.textContent = 0;
  current1.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;

  diceEl.classList.add('hidden');
  player0.classList.remove('gameover');
  player1.classList.remove('gameover');
  player0.classList.add('back');
  player1.classList.remove('back');
};

starting();

//switching the players
const switchingp = function () {
  activeplayer = activeplayer === 0 ? 1 : 0;
  currentscore = 0;
  player0.classList.toggle('back');
  player1.classList.toggle('back');
};

//rolling dice btn
roll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentscore += dice;
      document.getElementById(`current${activeplayer}`).textContent =
        currentscore;
    } else {
      switchingp();
    }
  }
});

//hold btn
hold.addEventListener('click', function () {
  if (playing) {
    scores[activeplayer] += currentscore;
    if (scores[activeplayer] <= 100) {
      document.getElementById(`score${activeplayer}`).textContent =
        scores[activeplayer];
      switchingp();
    } else {
      playing = false;

      document.getElementById(`score${activeplayer}`).textContent =
        scores[activeplayer];

      diceEl.classList.add('hidden');
      document.getElementById(`pl${activeplayer}`).classList.toggle('gameover');
    }
  }
});

//new game btn
newgame.addEventListener('click', starting);
