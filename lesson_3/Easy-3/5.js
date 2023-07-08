// The following function unnecessarily uses two return statements to return boolean values.
// Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?
// Try to come up with at least two different solutions.

// Returning the value of the conditional statement directly
// function isColorValid(color) {
//   return (color === "blue" || color === "green");
// }

// Using includes()
// function isColorValid(color) {
//   return ['blue', 'green'].includes(color);
// }

// Arrow function
// let isColorValid = color => color === "blue" || color === "green";

// Arrow function + includes()
let isColorValid = color => ['blue', 'green'].includes(color);


console.log(isColorValid('blue'));
console.log(isColorValid('green'));
console.log(isColorValid('red'));