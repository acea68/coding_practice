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
var lengthOfLongestSubstring = function (s) {
  // make a map obj that will contain all characters & initialize with count of 1 to track uniqueness
  let map = {};
  // make a temp var storing the potential longest string
  let temp = '';
  // let count = 0;
  // iterate thru input string
  for (let i = 0; i < s.length; i++) {
    // if char DNE in map, create count of it
    if (!map[s[i]]) {
      map[s[i]] = 1;
      // add current char to temp
      temp += s[i];
      // if count is > 1, break, reset temp and iterate at next char of input string
    } else {
      for (let j = i + 1; j < s.length; j++) {
        map[s[i]] = 0;
        temp = '';
        continue;
      }
      // add next char and check if exists already from map count

    }
  }
  return temp.length;
}
// TESTING
let result = lengthOfLongestSubstring("abca");
console.log(result); // 2
// // Example 1:
// let result = lengthOfLongestSubstring("abcabcbb");
// console.log(result); // 3
// // Explanation: The answer is "abc", with the length of 3.

// let result = lengthOfLongestSubstring("bbbbb");
// console.log(result); // 1
// // Explanation: The answer is "b", with the length of 1.

// let result = lengthOfLongestSubstring("pwwkew");
// console.log(result); // 3
// // Explanation: The answer is "wke", with the length of 3.
// // Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.