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

let monthlyPayment;
let noIntMonthlyPayment;
let standardIntRate;
let annualIntRate;
let monthlyIntRate;

let promoAnswer;
let promoMonthlyPayment;
let promoRate;
let promoAnnualIntRate;
let promoMonthlyIntRate;
let promoDurationMonths;

function invalidNumber(num) {
  return num.trimStart() === '' ||
  Number.isNaN(Number(num)) ||
  Number(num) <= 0;
}

let invalidNumberMessage = 'Please enter a positive number greater than zero.';
let invalidAnswerMessage = `Invalid Answer. Enter 'y' for yes and 'n' for no.`;

function invalidAnswer(answer) {
  return answer !== 'y' && answer !== 'n';
}

console.log('Welcome to the Mortgage Calculator');

console.log('How much is your loan?');
let loanAmount = readline.prompt();

while (invalidNumber(loanAmount)) {
  console.log(invalidNumberMessage);
  loanAmount = readline.prompt();
}

console.log('What is the duration of your loan in YEARS?');
let yearDuration = readline.prompt();
let monthDuration = Number(yearDuration) * 12;

while (invalidNumber(yearDuration)) {
  console.log(invalidNumberMessage);
  yearDuration = readline.prompt();
  monthDuration = Number(yearDuration) * 12;
}

console.log('Will you be paying interest on this loan?');
console.log(`Enter 'y' for yes and 'n' for no.`);
let isInterest = readline.prompt().toLowerCase();

while (invalidAnswer(isInterest)) {
  console.log(invalidAnswerMessage);
  isInterest = readline.prompt().toLowerCase();
}

if (isInterest === 'n') {
  calcNoInterest();
  displayNoIntPayment();
} else if (isInterest === 'y') {
  askPromo();
}

if (promoAnswer === 'n') {
  getInterestRate();
  displayMonthlyIntPayment();
} else if (promoAnswer === 'y') {
  getPromoRate();
  getPromoDuration();
}

function calcNoInterest() {
  noIntMonthlyPayment = (Number(loanAmount) / monthDuration).toFixed(2);
}

function displayNoIntPayment() {
  console.log(`You will owe $${noIntMonthlyPayment} for ${monthDuration} months.`);
}

function askPromo() {
  console.log('Does your loan include a promotional interest period? ');
  console.log(`Enter 'y' for yes and 'n' for no.`);
  promoAnswer = readline.prompt().toLowerCase();

  while (invalidAnswer(promoAnswer)) {
    console.log(invalidAnswerMessage);
    promoAnswer = readline.prompt().toLowerCase();
  }
}

function getInterestRate() {
  console.log('What is your stardard interest rate?');
  console.log('If 5% write 5, if 10%, write 10');
  standardIntRate = readline.prompt();
  validateStandardInt();
}

function validateStandardInt() {
  while (invalidNumber(standardIntRate)) {
    console.log(invalidNumberMessage);
    standardIntRate = readline.prompt();
  }

  calcInterest();
}

function calcInterest() {
  annualIntRate = Number(standardIntRate) / 100;
  monthlyIntRate = annualIntRate / 12;

  monthlyPayment = Number(loanAmount) * (monthlyIntRate /
  (1 - Math.pow((1 + monthlyIntRate), (-monthDuration))));
}

function displayMonthlyIntPayment() {
  console.log(`You will owe $${monthlyPayment.toFixed(2)} for ${monthDuration} months.`);
}

function getPromoRate() {
  console.log('What is the promotional rate?');
  console.log('If 5% write 5, if 10%, write 10');
  promoRate = readline.prompt();
  validatePromoRate();
}

function validatePromoRate() {
  while (invalidNumber(promoRate)) {
    console.log(invalidNumberMessage);
    promoRate = readline.prompt();
  }
}

function getPromoDuration() {
  console.log('What is the length of the promotional period in MONTHS?');
  promoDurationMonths = readline.prompt();

  validatePromoDuration();
}

function invalidPromoDuration(num) {
  return Number(num) <= 0;
}

function validatePromoDuration() {
  while (invalidPromoDuration(promoDurationMonths) || invalidNumber(promoDurationMonths)) {
    console.log('Please enter a positive number of 1 or greater.');
    promoDurationMonths = readline.prompt();
  }

  calcPromo();
}

function calcPromo() {
  promoAnnualIntRate = Number(promoRate) / 100;
  promoMonthlyIntRate = promoAnnualIntRate / 12;

  let promoLoanAmount = (Number(loanAmount) / monthDuration) * Number(promoDurationMonths);

  promoMonthlyPayment = Number(promoLoanAmount) * (promoMonthlyIntRate /
  (1 - Math.pow((1 + promoMonthlyIntRate), (-promoDurationMonths))));

  getInterestRate();
  displayMonthlyPromoPayment();
}

function displayMonthlyPromoPayment() {
  console.log(`During your promotional period, you will owe $${promoMonthlyPayment.toFixed(2)} for ${promoDurationMonths} months.`);

  displayMonthlyPayAfterPromo();
}

function displayMonthlyPayAfterPromo() {
  console.log(`After the promotional period, you will owe $${monthlyPayment.toFixed(2)} for ${monthDuration - promoDurationMonths} months.`);
}

//After going through material again:
// allow for promoRate of 0
// option to do another calculation?

