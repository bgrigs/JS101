let numbers = [1, 2, 3, 4, 5];
let reversedArr = [];

numbers.forEach((number) => {
  reversedArr.unshift(number);
});

console.log(reversedArr);
console.log(numbers);