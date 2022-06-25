/*
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).
The algorithm for myAtoi(string s) is as follows:
Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -2^31 should be clamped to -2^31, and integers greater than 2^31 - 1 should be clamped to 2^31 - 1.
Return the integer as the final result.

Note:
Only the space character ' ' is considered a whitespace character.
Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.

Example 1:
Input: s = "42"
Output: 42
Explanation: The underlined characters are what is read in, the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
         ^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "42" ("42" is read in)
           ^
The parsed integer is 42.
Since 42 is in the range [-231, 231 - 1], the final result is 42.

Example 2:
Input: s = "   -42"
Output: -42
Explanation:
Step 1: "   -42" (leading whitespace is read and ignored)
            ^
Step 2: "   -42" ('-' is read, so the result should be negative)
             ^
Step 3: "   -42" ("42" is read in)
               ^
The parsed integer is -42.
Since -42 is in the range [-231, 231 - 1], the final result is -42.

Example 3:
Input: s = "4193 with words"
Output: 4193
Explanation:
Step 1: "4193 with words" (no characters read because there is no leading whitespace)
         ^
Step 2: "4193 with words" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit)
             ^
The parsed integer is 4193.
Since 4193 is in the range [-231, 231 - 1], the final result is 4193.

Constraints:
0 <= s.length <= 200
s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.
*/
/**
 * @param {string} s
 * @return {number}
 * Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).
The algorithm for myAtoi(string s) is as follows:
Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -2^31 should be clamped to -2^31, and integers greater than 2^31 - 1 should be clamped to 2^31 - 1.
Return the integer as the final result.
Constraints:
0 <= s.length <= 200
s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.
 */
var myAtoi = function (s) {
  if (!s) return 0
  let result = '';
  // remove whitespace in front, if found (reduce string to only a +/- or a number in front)^
  let arr = s.split('');
  while (arr[0] === ' ' || arr[0] === '0') {
    arr.shift();
    if (!arr.length) return 0
  }
  // read sign and note, if found (use a marker/flag, and apply to it at end)
  let isNeg = false;
  // assume sign is the first symbol encountered that is not white space and account for (+ and none = positive, - = neg)
  if (arr[0] === '-') {
    isNeg = !isNeg;
    arr.shift();
    if (!arr.length) return 0
    let firstAscii = arr[0].charCodeAt(0);
    if (firstAscii <= 48 || firstAscii > 57) return 0
  }
  if (arr[0] === '+') {
    arr.shift();
    if (!arr.length) return 0
    let firstAscii = arr[0].charCodeAt(0);
    if (firstAscii <= 48 || firstAscii > 57) return 0
  }
  if (!arr.length) return 0
  let firstAscii = arr[0].charCodeAt(0);
  if (firstAscii <= 48 || firstAscii > 57) return 0
  // begin iterating string
  // while curr char is an integer
  while (arr[0] && typeof parseInt(arr[0]) === 'number') {
    let firstAscii = arr[0].charCodeAt(0);
    if (firstAscii <= 48 || firstAscii > 57) return 0
    // append char to result string
    result += arr[0];
    arr.shift();
    // once first non-int (parsed) char is encountered, break
  }
  // append sign if applicable & return string parsed as integer
  // return isNeg ? parseInt(result) * -1 : parseInt(result);
  result = parseInt(result);
  if (isNeg) { result = result * -1 }
  if (result > ((2 ** 31) - 1)) { result = (2 ** 31) - 1 }
  if (result < (-1 * (2 ** 31))) { result = -1 * (2 ** 31) }
  return result;
};
// let result = myAtoi("42");
// let result = myAtoi(" -413 w"); // -413
// let result = myAtoi("  -42"); // -42
// let result = myAtoi("-91283472332"); // -2147483648
// let result = myAtoi("-+12"); // 0
// let result = myAtoi("+"); // 0
// let result = myAtoi("  0000000000012345678"); // 12345678
let result = myAtoi("00000-42a1234"); // -42
console.log('🚀 ~ result', result);

/*
  let firstAscii = arr[0].charCodeAt(0);
  while (firstAscii === 32 || firstAscii >= 101 && firstAscii <= 132 || firstAscii >= 141 && firstAscii <= 172) {
    arr.shift();
    firstAscii = arr[0].charCodeAt(0);
  }
  while (firstAscii !== 43 && firstAscii !== 45 && firstAscii <= 48 || firstAscii >= 57) {
    arr.shift();
    firstAscii = arr[0].charCodeAt(0);
  }




-------1071 / 1082 test cases passed.----------
  var myAtoi = function (s) {
  if (!s) return 0
  let result = '';
  // remove whitespace in front, if found (reduce string to only a +/- or a number in front)^
  let arr = s.split('');
  while (arr[0] === ' ' || arr[0] === '0') {
    arr.shift();
    if (!arr.length) return 0
  }
  // read sign and note, if found (use a marker/flag, and apply to it at end)
  let isNeg = false;
  // assume sign is the first symbol encountered that is not white space and account for (+ and none = positive, - = neg)
  if (arr[0] === '-') {
    isNeg = !isNeg;
    arr.shift();
    if (!arr.length) return 0
    let firstAscii = arr[0].charCodeAt(0);
    if (firstAscii <= 48 || firstAscii > 57) return 0
  }
  if (arr[0] === '+') {
    arr.shift();
    if (!arr.length) return 0
    let firstAscii = arr[0].charCodeAt(0);
    if (firstAscii <= 48 || firstAscii > 57) return 0
  }
  if (!arr.length) return 0
  let firstAscii = arr[0].charCodeAt(0);
  if (firstAscii <= 48 || firstAscii > 57) return 0
  // begin iterating string
  // while curr char is an integer
  while (arr[0] && typeof parseInt(arr[0]) === 'number') {
    // append char to result string
    result += arr[0];
    arr.shift();
    // once first non-int (parsed) char is encountered, break
  }
  // append sign if applicable & return string parsed as integer
  // return isNeg ? parseInt(result) * -1 : parseInt(result);
  result = parseInt(result);
  if (isNeg) { result = result * -1 }
  if (result > ((2 ** 31) - 1)) { result = (2 ** 31) - 1 }
  if (result < (-1 * (2 ** 31))) { result = -1 * (2 ** 31) }
  return result;
};
  */
