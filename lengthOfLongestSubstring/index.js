// Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.
/**
 * @param {string} s
 * @return {number}
 */
// i: string
// o: integer representing length of the longest substring without repeating chars
// c: include spaces, symbols, numbers as possible chars
// e: include string length of 0 and large strings
// -------------------
// Attempt #2:
function lengthOfLongestSubstring(s) {
  let map = new Array(128).fill(0);
  let right = 0, left = 0, result = 0, r, l;
  while(right < s.length) {
    r = s[right];
    map
  }
}

// TESTING
let result = lengthOfLongestSubstring("abcaccrpk");
console.log(result); // 3
// // Example 1:
// let result = lengthOfLongestSubstring("abcaccbb");
// console.log(result); // 3
// // Explanation: The answer is "abc", with the length of 3.

// let result = lengthOfLongestSubstring("bbbbb");
// console.log(result); // 1
// // Explanation: The answer is "b", with the length of 1.

// let result = lengthOfLongestSubstring("pwwkew");
// console.log(result); // 3
// // Explanation: The answer is "wke", with the length of 3.
// // Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// -------------------
// Attempt #1:
// var lengthOfLongestSubstring = function (s) {
//   // make a map obj that will contain all characters & initialize with count of 1 to track uniqueness
//   let map = {};
//   // make a temp var storing the potential longest string
//   let temp = '';
//   // let count = 0;
//   // iterate thru input string
//   for (let i = 0; i < s.length; i++) {
//     // if char DNE in map, create count of it
//     if (!map[s[i]]) {
//       map[s[i]] = 1;
//       // add current char to temp
//       temp += s[i];
//       // if count is > 1, break, reset temp and iterate at next char of input string
//     } else {
//       for (let j = i + 1; j < s.length; j++) {
//         map[s[i]] = 0;
//         temp = '';
//         continue;
//       }
//       // add next char and check if exists already from map count

//     }
//   }
//   return temp.length;
// }

// -------------------
// Soln #1:
// var lengthOfLongestSubstring = function (s) {
//   let map = {};
//   let start = 0;
//   let maxLen = 0;
//   let arr = s.split('');
//   for (let i = 0; i < s.length; i++) {
//     let current = map[arr[i]];
//     if (current !== null && start <= current) {
//       start = current + 1;
//     } else {
//       maxLen = Math.max(maxLen, i - start + 1);
//     }
//     map[arr[i]] = i;
//   }
//   return maxLen
// };

// -------------------
// Soln #2:
function lengthOfLongestSubstring(s) {
  let map = new Array(128).fill(0);
  // console.log(map)
  let left = 0; // tracks left pointer index
  let right = 0; // tracks right pointer index
  let result = 0; // maxLength for substring
  let r, l; //
  // while the index on the right is less than the length of the string
  while (right < s.length) {
    // set r to the character of the input string at index of right pointer
    r = s[right];
    // add one to corresponding element in map to r's character unicode value
    map[r.charCodeAt()] += 1;
    // if this char has been seen already
    while (map[r.charCodeAt()] > 1) {
      // set l to the char at the left pointer index of input string
      l = s[left];
      // decrease map's element value by 1 corresponding to l's characted unicode value
      map[l.charCodeAt()] -= 1;
      // advance left index
      left += 1;
    } // set result to largest value between current result and delta window between right and left indexes (account for 0-index with +1)
    result = Math.max(result, right - left + 1)
    // advance right index
    right += 1;
  }
  return result
}