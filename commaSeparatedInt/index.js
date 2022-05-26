function solution(nums) {
  if (nums.length > 0 && nums.length < 3) {
    return integers.join(',');
  }
  let result = [];
  let start = 0;
  let next = 1;
  let end = 2;

  while (start < nums.length) {
    if (nums[end] - nums[next] === 1 && nums[next] - nums[start] === 1) {
      while (nums[end] - nums[next] === 1) {
        next = end;
        end = end + 1;
      }
      let consec = nums.slice(start, end);
      result.push(`${consec[0]}-${consec[consec.length - 1]}`);
      start = end;
      next = end + 1;
      end = end + 2;
    } else {
      result.push(nums[start]);
      start = next;
      next = end;
      end = end + 1;
    }
  }
  return result.join(',');
}

let first = solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
console.log(first);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"

let second = solution([-4, -3, -2, -1, 2, 3, 5, 6, 12, 13, 14, 15, 17]);
console.log(second);
// returns "-4--1,2,3,5,6,12-15,17"



/*4
Comma Separated Integers
You are going to create a function called "solution", which will take in
an array of increasing integers, and return them in the format described below.
A format for expressing an ordered list of integers is to use a comma
separated list of either individual integers or a range of integers
denoted by the starting integer separated from the end integer in the
range by a dash, '-'.
The range includes all integers in the interval including both endpoints.
It is not considered a range unless it spans at least 3 numbers.
For example, an input of [12, 13, 15, 16, 17] would return "12, 13, 15-17"
Complete the solution so that it takes a list of integers in increasing
order and returns a correctly formatted string in the range format.
Below is an example of your code running, assuming you have solved the
problem correctly.
*/
function solution(nums) {
  if (nums.length <= 3) {
    return nums.join(',');
  }
  // create storage result array
  var result = [];
  var start = 0;
  var next = 1;
  var end = 2;
  // iterate through array
  for (var i = 0; i < nums.length; i++) {

  })
    // begin consec count to check for at least three #s in order
    // create storage vars
    // create second loop to check for min three #s consec
      // if first # = var, && second = var + 1 && third = var + 2
        // check for further #s in order and add to stack
        // if consec chain is broken, push range up to last consec # into result
    // otherwise, push to result
  // return result
};


let first = solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
console.log(first);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"

let second = solution([-4, -3, -2, -1, 2, 3, 5, 6, 12, 13, 14, 15, 17]);
console.log(second);
// returns "-4--1,2,3,5,6,12-15,17"