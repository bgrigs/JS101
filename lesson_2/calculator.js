// Welcome the user
// Ask the user for the first number
// Ask the user for the second number
// Ask the user for the operation they'd like to peform
// Perform the operation
// Display the result
const MESSAGES = require('./calculator_messages.json');


const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

while (true) {
  prompt(MESSAGES['welcome']);

  prompt(MESSAGES['firstNumber']);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES['invalidNumber']);
    number1 = readline.question();
  }

  prompt(MESSAGES['secondNumber']);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES['invalidNumber']);
    number2 = readline.question();
  }

  prompt(MESSAGES['selectOperation']);
  let operation = readline.question();

  while (!['1' , '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES['invalidOperation']);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
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

  prompt(`${MESSAGES['result']} ${output}`);

  prompt(MESSAGES['goAgain']);
  let anotherCalc = readline.question().toLowerCase();

  while (anotherCalc[0] !== 'y' && anotherCalc[0] !== 'n') {
    prompt(MESSAGES['invalidAnswer']);
    anotherCalc = readline.question().toLowerCase();
  }

  if (anotherCalc[0] === 'n') break;
}