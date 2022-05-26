/* 1
Exercise 1
Write a function lesserNum which takes in two integer arguments, and returns the lesser of the two. If they're equal, return either.

You should be able to call it like so:
*/
function lesserNum(num1, num2) {
    if (num1 < num2) {
      return num1;
    } else if (num1 === num2) {
      return num1;
    }
    return num2;
  }
  console.log(lesserNum(19, 4)); //4
  console.log(lesserNum(3, 26)); //3
  console.log(lesserNum(-10, -10)); //-10