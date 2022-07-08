/* Write an efficient function that checks whether any permutation of an input string is a palindrome.
You can assume the input string only contains lowercase letters.
Examples:
"civic" should return true
"ivicc" should return true
"civil" should return false
"livci" should return false
"But 'ivicc' isn't a palindrome!"
If you had this thought, read the question again carefully. We're asking if any permutation of the string is a palindrome. Spend some extra time ensuring you fully understand the question before starting. Jumping in with a flawed understanding of the problem doesn't look good in an interview. */
function hasPalindromePermutation(theString) {
  // Check if any permutation of the input is a palindrome
  let map = {};
  for (let char of theString) {
    if (map[char]) {
      map[char] += 1;
      continue;
    }
    map[char] = 1;
  }
  let oddCount = 0;
  for (let letter in map){
    if (map[letter] % 2 === 1) oddCount++;
  }
  if (oddCount > 1) return false
  return true;
}
// var result = hasPalindromePermutation('ivicc');
// console.log('🚀 ~ result:', result);








// Tests
let desc = 'permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcbcd'), true, desc);

desc = 'permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabccbdd'), true, desc);

desc = 'no permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcd'), false, desc);

desc = 'no permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabbcd'), false, desc);

desc = 'empty string';
assertEqual(hasPalindromePermutation(''), true, desc);

desc = 'one character string ';
assertEqual(hasPalindromePermutation('a'), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
