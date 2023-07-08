//Return a new string that swaps the case of all of the letters
//`tHE mUNSTERS ARE CREEPY AND SPOOKY.`

let munstersDescription = "The Munsters are creepy and spooky.";

let reverseDescription = "";

for (let i = 0; i < munstersDescription.length; i++) {
  if (munstersDescription[i] === munstersDescription[i].toUpperCase()) {
    reverseDescription += munstersDescription[i].toLowerCase();
  } else {
    reverseDescription += munstersDescription[i].toUpperCase();
  }
}

console.log(reverseDescription);
