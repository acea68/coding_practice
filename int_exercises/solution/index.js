/*
4
Comma Separated Integers
You are going to create a function called "solution", which will take in an array of increasing integers, and return them in the format described below.
A format for expressing an ordered list of integers is to use a comma separated list of either individual integers or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'.
The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers.
For example, an input of [12, 13, 15, 16, 17] would return "12, 13, 15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format. Below is an example of your code running, assuming you have solved the problem correctly.
*/
function solution(arr){
    let numsInOrder = ''
    for(let i = 0; i < arr.length; i++){
      let consecCount = 0
      let consecStr = ''
      consecStr += arr[i]+'-'
      for(let j = 1; j < arr.length; j++){
        if(arr[i] + j === arr[i + j]){
          consecCount++
        } else if(consecCount > 3){
            if(arr[i] + j !== arr[i + j]){
            }
        }
      }
    }
    return numsInOrder
  }
  console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
  // returns "-6,-3-1,3-5,7-11,14,15,17-20"
  
  // console.log(solution([-4, -3, -2, -1, 2, 3, 5, 6, 12, 13, 14, 15, 17]));
  // returns "-4--1,2,3,5,6,12-15,17"