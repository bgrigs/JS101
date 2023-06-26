/*
PRINT a welcome msg to the user

GET
--loanAmount
--yearDuration (loan duration in years)
--are they paying interest?
  --IF 'n', noInterest()
  --IF 'y', ask:
    --Does your loan include a promotional interest rate?
      --IF 'n', getInterest();
        --IF user inputs 0, noInterest()
        --ELSE user inputs a valid number calcInterest()
      --IF 'y',
        --What is your promotional interest rate?
          --GET promoRate
        --What is the length of your promotional interest rate in months?
        --GET promoMonths
        --calcPromoIntRate

Declare variable apr, calculating interestRate / 100
Declare variable monthlyIntRate, calculate based on apr / 12
Declare variable monthDuration (loan duration in years),
^calculate based on yearDuration * 12

Calculate monthly loan payment using formula:
let m = p * (j / (1 - Math.pow((1 + j), (-n))));

let monthlyPayment = loanAmount * (monthlyIntRate /
(1 - Math.pow((1 + monthlyIntRate), (-monthDuration))))

PRINT monthly payment
*/

const readline = require('readline-sync');

function invalidNumber(num) {
  return num.trimStart() === '' ||
  Number.isNaN(Number(num)) ||
  Number(num) < 0;
}

function invalidAnswer(answer) {
  return answer !== 'y' && answer !== 'n';
}

console.log('Welcome to the Mortgage Calculator');

console.log('How much is your loan?');
let loanAmount = readline.prompt();

while (invalidNumber(loanAmount)) {
  console.log('Please enter a positive number.');
  loanAmount = readline.prompt();
}

console.log('What is the duration of your loan in years?');
let yearDuration = readline.prompt();
let monthDuration = Number(yearDuration) * 12;


while (invalidNumber(yearDuration)) {
  console.log('Please enter a positive number.');
  yearDuration = readline.prompt();
}

console.log('Will you be paying interest on this loan?');
console.log(`Enter 'y' for yes and 'n' for no.`);
let isInterest = readline.prompt().toLowerCase();

while (invalidAnswer(isInterest)) {
  invalidAnswerReply();
  isInterest = readline.prompt().toLowerCase();
}

function invalidAnswerReply() {
  console.log(`Invalid Answer. Enter 'y' for yes and 'n' for no.`);
}

let monthlyPayment;
let noIntMonthlyPayment;
let promoAnswer;

if (isInterest === 'n') {
  noInterest();
} else if (isInterest === 'y') {
  askPromo();
}

function noInterest() {
  noIntMonthlyPayment = (Number(loanAmount) / monthDuration).toFixed(2);
  console.log(`You will owe $${noIntMonthlyPayment} for ${monthDuration} months.`);
}

function askPromo() {
  console.log('Does your loan include a promotional interest rate?');
  promoAnswer = readline.prompt().toLowerCase();
  while (invalidAnswer(promoAnswer)) {
    invalidAnswerReply();
    promoAnswer = readline.prompt().toLowerCase();
  }
}

let interestRate;
let apr;
let monthlyIntRate;

if (promoAnswer === 'n') {
  getInterest();
} else if (promoAnswer === 'y') {
  console.log('This calculator does not support promotional interest rates at this time. Goodbye.');
}

function getInterest() {
  console.log('What is your interest rate?');
  console.log('If 5% write 5, if 10%, write 10');
  interestRate = readline.prompt();

  while (invalidNumber(interestRate)) {
    console.log('Please enter a positive number.');
    interestRate = readline.prompt();
  }

  if (Number(interestRate) === 0) {
    noInterest();
    console.log(`You selected an interest rate of 0. If you'd like to calculate a loan with interest, please start over and select an interest rate greater than 0.`);
  } else {
    calcInterest();
  }
}

function calcInterest() {
  apr = Number(interestRate) / 100;
  monthlyIntRate = apr / 12;

  monthlyPayment = Number(loanAmount) * (monthlyIntRate /
  (1 - Math.pow((1 + monthlyIntRate), (-monthDuration))));
  displayInterest();
}

function displayInterest() {
  console.log(`You will owe $${monthlyPayment.toFixed(2)} for ${monthDuration} months.`);
}

//After going through material again:
// add in promo period etc
//break getInterest() into 2-3 functions?
