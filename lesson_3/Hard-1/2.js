// What does the last line in the following code output? Try to answer without running the code or looking at the solution.

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object); // { first: [ 1, 2 ] }

// Because numArray is referencing the original array [1], push() modifies the array. If we wanted to only modify numArray, we'd have to use slice() or another non-mutating method

// We can declare and initialize numArray with a reference to a copy of the original array:

let object2 = { first: [1] };
let numArray2 = object2["first"].slice();
numArray2.push(2);

console.log(numArray2); //  => "[1, 2]"
console.log(object2); // { first: [ 1] }


// We can use Array.prototype.concat(), which returns a new array instead of modifying the original array:

let object3 = { first: [1] };
let numArray3 = object3["first"].concat();
numArray3.push(2);

console.log(numArray3); //  => "[1, 2]"
console.log(object3); // { first: [ 1] }