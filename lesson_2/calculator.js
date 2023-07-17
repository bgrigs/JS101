// Welcome the user
// Ask the user for the first number
// Ask the user for the second number
// Ask the user for the operation they'd like to peform
// Perform the operation
// Display the result

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

while (true) {
  prompt('Welcome to the Calculator');

  prompt('What is the first number?')
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt('Hmmm...that doesn\'t look like a valid number.')
    number1 = readline.question();
  }

  prompt('What is the second number?')
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt('Hmmm...that doesn\'t look like a valid number.')
    number2 = readline.question();
  }

  prompt(`What operation would you like to peform?
  1) Add 2) Subtract 3) Multiply 4) Divide`);
  let operation = readline.question();

  while (!['1' , '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3, or 4.')
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1' :
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break; 
    case '3': 
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break; 
  }

  prompt(`The result is ${output}`);

  prompt(`Would you like to make another calculation?`)
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt(`Please enter 'y' or 'n'.`);
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'n') break;
}
