'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'ð Correct Number !';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

/////////////////////////////////////////////////////////

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'â No number!';
    displayMessage('â No number!');

    // when player wins
  } else if (guess === number) {
    // document.querySelector('.message').textContent = 'ð Correct Number !';
    displayMessage('ð Correct Number !');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // when the guess is wrong
  else if (guess !== number) {
    if (score > 1) {
      //   document.querySelector('.message').textContent = guess > number ? 'ð Too high!' : 'ð Too low!';
      displayMessage(guess > number ? 'ð Too high!' : 'ð Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'ð¥You lost the game!';
      displayMessage('ð¥You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

/////////////////////////////////////////////////////////
// Coding Challenge #1
/*
Implement a game reset functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'Again' class and attach a click event handler
2. In the handler function, restore initial values of the score and number variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

Good Luck ð
*/
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
