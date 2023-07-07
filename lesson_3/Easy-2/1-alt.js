// Alt 1 (all occurences)
let advice = "Few things in life are as important as house training your pet dinosaur.";

advice = advice.split('important').join('urgent');

console.log(advice);

// Alt 2 (all occurences)
let dragonAdvice = "Few things in life are as important as house training your pet dragon.";

dragonAdvice = dragonAdvice.replace(/important/g, 'urgent');

console.log(dragonAdvice);