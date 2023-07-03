// How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function checkExclMark(string) {
  if (string[string.length - 1] === '!') {
    return true;
  } else {
    return false;
  }
}

console.log(checkExclMark(str1));
console.log(checkExclMark(str2));