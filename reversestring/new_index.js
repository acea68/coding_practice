// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Method #1: create function "reverse", with an input of a string. 

// function reverse(str) {
//     var split_str = str.split('') // Then create a variable. Apply method 
//     // "split," to split up string into individual elements, creating a list. 
   
//     // console.log(split_str)
//     // prints initial string that has been split
    
//     let reversed_list = split_str.reverse() // create new variable2, apply method "reverse" to it. 
//     // Output is same length list, with elements in reverse order. 
    
//     // console.log(reversed_list)

//     var joined_str = reversed_list.join('')
//     // console.log(joined_str)

//     return joined_str
// }

// var input = "hello"
// console.log(input)
// var ans = reverse(input)
// console.log(ans)

// ----------------------

// Method #2:

// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '');
// }

// var input = "hello"
// var ans = reverse(input)
// console.log(ans)

// Method #3:

function reverse(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
    // console.log(reversed)
  }

  return reversed;
}

let new_var = "hello"
console.log(reverse(new_var))

module.exports = reverse;
