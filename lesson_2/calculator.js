// Welcome the user
// Ask the user for the first number
// Ask the user for the second number
// Ask the user for the operation they'd like to peform
// Perform the operation
// Display the result
const LANGUAGE = 'en';
const MESSAGES = require('./calculator_messages.json');

const readline = require('readline-sync');

function prompt(key, calcOutput = "") {
  let message = MESSAGES[LANGUAGE][key];
  console.log(`=> ${message}${calcOutput}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

while (true) {
  prompt('welcome');

  prompt('firstNumber');
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt('invalidNumber');
    number1 = readline.question();
  }

  prompt('secondNumber');
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt('invalidNumber');
    number2 = readline.question();
  }

  prompt('selectOperation');
  let operation = readline.question();

  while (!['1' , '2', '3', '4'].includes(operation)) {
    prompt('invalidOperation');
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

  prompt('result', output);

  prompt('goAgain');
  let anotherCalc = readline.question().toLowerCase();

  while (anotherCalc !== 'y' && anotherCalc !== 'n') {
    prompt('invalidAnswer');
    anotherCalc = readline.question().toLowerCase();
  }

  if (anotherCalc[0] === 'n') {
    break;
  } else {
    console.clear();
  }
}