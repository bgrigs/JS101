// Welcome the user
// Ask the user for the first number
// Ask the user for the second number
// Ask the user for the operation they'd like to peform
// Perform the operation
// Display the result

const readline = require('readline-sync');

console.log('Welcome to the Calculator');

console.log('What is the first number?')
let number1 = readline.question();

console.log('What is the second number?')
let number2 = readline.question();

console.log(`What operation would you like to peform?
1) Add 2) Subtract 3) Multiply 4) Divide`);
let operation = readline.question();

let output;

if (operation === '1') {
  output = Number(number1) + Number(number2);
} else if (operation === '2') {
  output = Number(number1) - Number(number2);
} else if (operation === '3') {
  output = Number(number1) * Number(number2);
} else if (operation === '4') {
  output = Number(number1) / Number(number2);
} else {
  console.log('Invalid. Select the operation by entering a number 1-4.')
}

console.log(`The result is ${output}`);

