/*
START

SET - initialize a variable newString that will hold the concatenated string
Declare a function that accepts an array of strings

WHILE iterator < length of array
  Add the current word to newString

Call the function (pass an array as the argument)
PRINT the results 

END
*/

let newString = '';

function concat(arr) {
  for (let word of arr) {
    newString += word + ' ';
  }
}

concat(['Is', 'this', 'the', 'real', 'life']);
console.log(newString);