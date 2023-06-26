// ask user for their move
// computer will choose its move
// display who won/the result

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
let playGame = true;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayWinner(choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === 'scissors') ||
  (choice === 'scissors' && computerChoice === 'paper') ||
  (choice === 'paper' && computerChoice === 'rock')) {
    return 'You win!';
  } else if ((computerChoice === 'rock' && choice === 'scissors') ||
  (computerChoice === 'scissors' && choice === 'paper') ||
  (computerChoice === 'paper' && choice === 'rock')) {
    return 'You lose!';
  } else {
    return `It's a tie!`;
  }
}

while (playGame) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt(`That's not a valid choice`);
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}. Computer chose ${computerChoice}.`);

  prompt(displayWinner(choice, computerChoice));

  prompt('Would you like to play again? (y/n)');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'y' && answer !== 'n') {
    prompt(`Please enter 'y' or 'n'.`);
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') {
    playGame = false;
  }
}