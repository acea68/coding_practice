/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:
Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

Constraints:
1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*/
function romanToInt(roman) {
  if (roman.length > 15 || !roman.length) return null;
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    CM: 900,
    CD: 400,
    XC: 90,
    XL: 40,
    IX: 9,
    IV: 4
  };
  // create sumtotal var
  // iterate input & take left most char & compare to adj right
  // if right > left, use special combination grouping, add to total, skip the next char
  // if not, convert to num and add to total
  let sum = 0, index = 0;
  while (index < roman.length) {
    if (map[roman[index]] >= map[roman[index + 1]] || !roman[index + 1] ) {
      sum += map[roman[index]];
      index++;
    } else if (map[roman[index]] < map[roman[index + 1]]) {
      sum += map[roman[index] + roman[index + 1]];
      index += 2;
    }
  }
  return sum;
}

let desc = 'repeat numerals';
let actual = romanToInt('III');
let expected = 3;
assertDeepEqual(actual, expected, desc);

/* Example 2:
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3. */
desc = 'special numeral with repeats';
actual = romanToInt('LVIII');
expected = 58;
assertDeepEqual(actual, expected, desc);

/* Example 3:
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4. */
desc = 'combinations of special numerals';
actual = romanToInt('MCMXCIV');
expected = 1994;
assertDeepEqual(actual, expected, desc);

desc = 'no input provided';
actual = romanToInt('');
expected = null;
assertDeepEqual(actual, expected, desc);

desc = 'very large numeral provided';
actual = romanToInt('MMMMMMMMDCCCLXXXVIII'); // 8888: larger than 15 chars
expected = null;
assertDeepEqual(actual, expected, desc);

function assertDeepEqual(a, b, desc) {
  const aStr = JSON.stringify(a);
  const bStr = JSON.stringify(b);
  if (aStr !== bStr) {
    console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
  } else {
    console.log(`${desc} ... PASS`);
  }
}