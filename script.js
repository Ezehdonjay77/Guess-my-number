'use strict';
//Project Guess my number
//DOM Manipulation
/*
console.log(document.querySelector('.message').textContent); //The DOM is the complete representation of the HTML document.
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 30;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//Handling Check Event
//An event is something that happens on a page(mouse clicking, key press e.t.c) with an event listener we will get an event an react to it.

let secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// This is creting a function displayMessage to help display the message (argument) and keep the code clean and DRY(dont repeat your code)
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

// Making the check clickable and active
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input 
  if (!guess) {
    displayMessage('⛔️ no number!');
    // document.querySelector('.message').textContent = '⛔️ no number!';
  }
  // When player guesses the correct number
  else if (guess === secreteNumber) {

    // document.querySelector('.message').textContent = '✅ Correct Number!';
    displayMessage('✅ Correct Number!');

    document.querySelector('.number').textContent = secreteNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    } else if (score < highscore) {
      document.querySelector('.highscore').value = score;
    }

  }

  // When guess is wrong
  // Refactoring the code tp look cleaner and having no duplicates
  else if (guess !== secreteNumber) {
    if (score > 1) {

      // document.querySelector('.message').textContent = guess > secreteNumber ? '📈 Too High!' : '📈 Too High!';
      displayMessage(guess > secreteNumber ? '📈 Too High!' : '📈 Too low!');

      score--;

      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '🥴 You lost the game!';
      displayMessage('🥴 You lost the game!');

      document.querySelector('.score').textContent = 0;
    }
  }


  // When guess is too high
  // else if (guess > secreteNumber) {
  // if (score > 1) {
  // document.querySelector('.message').textContent = '📈 Too High!';
  // score--;
  // document.querySelector('.score').textContent = score;
  // } else {
  // document.querySelector('.message').textContent = '🥴 You lost the game!';
  // document.querySelector('.score').textContent = 0;
  // }

  // }

  // When guess is too low
  // else if (guess < secreteNumber) {
  // if (score > 1) {
  // document.querySelector('.message').textContent = '📉 Too Low!';
  // score--;
  // document.querySelector('.score').textContent = score;
  // } else {
  // document.querySelector('.message').textContent = '🥴 You lost the game!';
  // document.querySelector('.score').textContent = 0;
  // }
  // }
});

// MAking the again button clickable and resetting the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secreteNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  document.querySelector('.number').textContent = '?';

  document.querySelector('.score').textContent = score;

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

});


