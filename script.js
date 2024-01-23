'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// displaying message
const displayMessage = function (classes, message) {
  document.querySelector(classes).textContent = message;
};

// guess the number button handler
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displayMessage('😭 Enter a number');

    // when the player wins
  } else if (guess === secretNumber) {
    displayMessage('.message', '🎉 Correct Number!');
    displayMessage('.number', secretNumber);
    document.querySelector('body').style.backgroundColor = '#77dd77';
    document.querySelector('.number').style.width = '30rem';

    // setting up the highscore
    if (score > highScore) {
      highScore = score;
      displayMessage('.highscore', highScore);
    }

    // when player didn't guess the secret number
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(
        '.message',
        guess > secretNumber ? '📈 Too high' : '📉 Too low'
      );
      score--;
      displayMessage('.score', score);
    } else {
      displayMessage('.message', '💥 You lost the game!');
      displayMessage('.score', 0);
    }
  }
});

// reset the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.guess').value = '';
  displayMessage('.number', '?');
  displayMessage('.message', 'Start guessing...')
  displayMessage('.score', '20')
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
