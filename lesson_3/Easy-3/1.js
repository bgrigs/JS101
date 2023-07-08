// Write three different ways to remove all of the elements from the following array:

// While loop with shift()
let numbers = [1, 2, 3, 4];

while (numbers.length) {
  numbers.shift();
}

console.log(numbers);

// Setting length to 0
let numbers2 = [1, 2, 3, 4];

numbers2.length = 0;

console.log(numbers2);

// Using splice()
let numbers3 = [1, 2, 3, 4];

numbers3.splice(0, numbers3.length);

console.log(numbers3);

// While loop with pop()
let numbers4 = [1, 2, 3, 4];

while (numbers4.length) {
  numbers4.pop();
}

console.log(numbers4);