// Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;
console.log(numbers);

// Answer: No, this code will not raise an error.
// It will add empty items at index 3, 4, and 5 and the number 5 at index 6.

console.log(numbers[4]);  // what will this line log to the console?
// Answer: undefined;