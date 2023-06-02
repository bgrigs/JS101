// a method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element. For instance:

//everyOther([1,4,7,2,5]); // => [1,7,5]

/*
START 

SET a variable to an empty array

Declare a function

  WHILE iterator < length of the array
    Check to see if the iterator index is even or odd
    Push the even index numbers, starting at 0, to the variable

PRINT the result

END

*/

const newArr = [];

function everyOther(numbers) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (i % 2 === 0) {
      newArr.push(numbers[i]);
    }
  }
}

everyOther([1,4,7,2,5]); // => [1,7,5]
console.log(newArr);
