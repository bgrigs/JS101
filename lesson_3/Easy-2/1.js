// Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your important pet dinosaur.";

//Will replace all occurences. Can be used on a variety of strings, not only the one provided.
let newAdvice;

function modifyString(string, oldWord, newWord) {
  newAdvice = string.replace(oldWord, newWord);

  checkWord(newAdvice, oldWord);
}

function checkWord(string, oldWord) {
  if (string.includes(oldWord)) {
    modifyString(newAdvice, "important", "urgent");
  }
  return newAdvice;
}

modifyString(advice, "important", "urgent");

// Replacing only first occurrence:
// newAdvice = advice.replace('important', 'urgent');

console.log(newAdvice);
