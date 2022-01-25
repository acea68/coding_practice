/* HOF
1
Converting a for loop into .forEach
Replace the for loop in the following code with .forEach.
*/
var x13sLunchesPerDay = ['🍪', '🍪', '🍪', '🍪', '🍪', '🍪', '🍪'];

x13sLunchesPerDay.forEach(function(item){
  x13sLunchesPerDay.push('🍪🍪')
  x13sLunchesPerDay.shift()
});
// for(let i = 0; i < x13sLunchesPerDay.length; i++){
//   x13sLunchesPerDay[i]='🍪🍪'
// }

// console.log(x13sLunchesPerDay); // ['🍪🍪', '🍪🍪', '🍪🍪', '🍪🍪', '🍪🍪', '🍪🍪', '🍪🍪'];
// ---------------------------
// ---------------------------
/*
2
More practice with .forEach
Let's double up on X13's cookies for every even index.
*/
var x13sLunchesPerDay = ['🍪', '🍪', '🍪', '🍪', '🍪', '🍪', '🍪'];

x13sLunchesPerDay.forEach(function(item){
  x13sLunchesPerDay.push('🍪', '🍪🍪')
  x13sLunchesPerDay.shift()
  x13sLunchesPerDay.shift()
});

console.log(x13sLunchesPerDay); // ['🍪🍪', '🍪', '🍪🍪', '🍪', '🍪🍪', '🍪', '🍪🍪'];