let numbers = [1, 2, 3, 4, 5];
let reversed = numbers.slice().reverse();
console.log(reversed);
console.log(numbers);

let moreNumbers = [1, 2, 3, 4, 5];

// Using reverse()
// let reversedMoreNumbers = [...moreNumbers].reverse();

//Using sort()
let reversedMoreNumbers = [...moreNumbers].sort((num1, num2) => num2 - num1);

console.log(reversedMoreNumbers);
console.log(numbers);
