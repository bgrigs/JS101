let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

// What will the code output?
// Try to answer without running the code.

// Answer = hello there
// Strings are primitive, immutable values. When assigning a string to a variable, a new copy of the string is created.
// In Line 2, a copy of str1 1 is assigned to str2. In line 3, str2 is assigned a new string. str1 remains unchanged.


