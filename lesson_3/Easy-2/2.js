// The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort can rearrange the elements in a variety of ways, including descending.
// Both of these methods mutate the original array as shown below. Write two distinct ways of reversing the array without mutating the original array.
// Use reverse for the first solution, and sort for the second.

// My solution uses the new toReversed() and toSorted() methods, which do not mutate the original array like reverse() and sort() do

let numbers = [1, 2, 3, 4, 5];

let reversedNumbers = numbers.toReversed();

console.log(reversedNumbers);

let sortedNumbers = numbers.toSorted((num1, num2) => num2 - num1);

console.log(sortedNumbers);

console.log(numbers); // has not been mutated

