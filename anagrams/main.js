// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
// anagrams('rail safety', 'fairy tales')-- > True
// anagrams('RAIL! SAFETY!', 'fairy tales')-- > True
// anagrams('Hi there', 'Bye there')-- > False

// -------------------------------
// Method #1: word.replace(/[^\w]/g, '').toLowerCase();

// function anagrams(strA, strB) {
//   let str1 = '';
//   let str2 = '';
//   let sanitize = str => str.replace(/[^\w]/g, '').toLowerCase();
//   str1 = sanitize(strA);
//   str2 = sanitize(strB);

//   let mapper = input => {
//     let obj = {};
//     input.split('').forEach(char => {
//       obj[char] ? obj[char]++ : obj[char] = 1;
//     })
//     return obj;
//   };
//   let mapped1 = mapper(str1);
//   let mapped2 = mapper(str2);

//   let sorted = object => {
//     let arr = [];
//     for(let prop in object) {
//       arr.push([prop, object[prop]]);
//     }
//     // console.log(arr);
//     arr.sort()
//     return JSON.stringify(arr);
//   }

//   return sorted(mapped1) === sorted(mapped2) // ? true : false;
// };

// -------------------------------
// Method #2

// function anagrams(str1, str2) {
//   let charMap1 = charMapHelper(str1);
//   let charMap2 = charMapHelper(str2);
//   if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
//     return false;
//   }
//   for (let char in charMap1) {
//     if (charMap1[char] !== charMap2[char]){
//       return false;
//     }
//   }
//   return true;
// };

// function charMapHelper (str) {
//   let charMap = {};
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// };

// -------------------------------
// Method #3

function anagrams(str1, str2) {
  return cleanStr(str1) === cleanStr(str2);
};

function cleanStr(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

// console.log(anagrams('rail safety', 'fairy tales')); // True
console.log(anagrams('RAIL! SAFETY!', 'fairy tales')); // True
// console.log(anagrams('Hi there', 'Bye there')); // False