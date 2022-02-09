/*
Split Strings
Complete the function splitPairs such that it splits the input string into pairs of characters. If the input string has a length that is odd, then it should replace the missing second character of the final pair with an underscore _. Note, an empty string should make your function produce an empty array.
*/
function splitPairs(input) {
  var result = [];
  if (input.length === 0){
    return result;
  } else if (input.length % 2 === 1) {
    input += '_';
  }
  input = input.split('');
  while (input.length > 0) {
    var last2 = input.splice(input[input.length - 3], 2);
    last2 = last2.join('');
    result.push(last2);
  }
  return result; // if return format is string

  // var resultStr = result.join(' ');
  // return resultStr; // if return format is an array
}
var result = splitPairs('Hello, World!'); // "He ll o, W or ld !_"
// or ['He', 'll', 'o,', ' W', 'or', 'ld', '!_']
console.log('result: ', result);