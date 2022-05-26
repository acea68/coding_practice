// Flip every chunk of n characters in a string, where n is any positive integer greater than 1.
// Note that this is intentionally very similar to the previous problem.
// Example:
function flipEveryNChars(string,num){
    let flippedFive = ''
    for(let i = 0; i < string.length; i += num){
      for(let j = i + (num - 1); j >= i; j-- ){
        flippedFive += string[j]
      }
    }
    return flippedFive
}
var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
// Breaking this example down piece by piece:
// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'
// expected -> 'ohs axe trelpma'