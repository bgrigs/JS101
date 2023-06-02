/* START

# Given a collection of integers called "numbers"

SET iterator 
SET savedNumber = value within numbers collection at space 1

WHILE iterator <= length of numbers
  SET currentNumber = value within numbers collection at space "iterator"
  IF currentNumber > savedNumber
    savedNumber = currentNumber
  ELSE
    skip to the next iteration

  iterator = iterator + 1

PRINT savedNumber

END */


function findGreatest(numbers) {
  if (numbers === undefined) {
    return; 
  }
  let savedNumber = numbers[0];

  numbers.forEach(num => {
    if (num > savedNumber) {
      savedNumber = num; 
    }
  }); 



  return savedNumber; 
}

console.log(findGreatest([1, 2, 3, 10, 18, 4]));
console.log(findGreatest(undefined));

