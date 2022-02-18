function solution(integers) {
  if (integers.length > 0 && integers.length < 3) {
    return integers.join(',');
  }
  // create a result array
  let result = [];
  // create start index binding, equal to 0
  let start = 0;
  // create next index binding, equal to 1
  let next = 1;
  // create end inde binding, equal to 2
  let end = 2;

  // iterate over the integers array
  while (start < integers.length) {
    // if value at end minus value at next is 1, and value at next minus value at start is 1
    if (integers[end] - integers[next] === 1 && integers[next] - integers[start] === 1) {
      // while value at end minus value at next = 1
      while (integers[end] - integers[next] === 1) {
        // next, end = end, end + 1
        next = end;
        end = end + 1;
      }
      // save a slice of input from start to end
      let seq = integers.slice(start, end);
      // create string format of slice, and add to result
      result.push(`${seq[0]}-${seq[seq.length - 1]}`);
      // start, next, end = end, end + 1, end + 2
      start = end;
      next = end + 1;
      end = end + 2;
      // otherwise
    } else {
      // we do not have a streak
      // add value at start to result
      result.push(integers[start]);
      // start, next, end = next, end, end + 1
      start = next;
      next = end;
      end = end + 1;
    }
  }
  // return the result array joined on a comma
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