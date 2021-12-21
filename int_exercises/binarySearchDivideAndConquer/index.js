/*
Binary Search with Divide and Conquer (exceeds difficulty of interview)
38
Divide and Conquer
PLEASE FOLLOW THESE INSTRUCTIONS CAREFULLY.
Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.
Given a sorted array, such as this: [1, 3, 16, 22, 31, 33, 34]
1) Pick the midpoint: 22. 
2) The value is higher than 22, so now consider only the right half of the previous array: [...31, 33, 34] 
3) Pick the midpoint: 33 
4) The value is lower than 33, so now consider only the left half of the previous array: [...31...] 
5) Pick the midpoint: 31 
6) You've hit the value. 
7) Return the index of the value.
If you don't find the value, you can return null.
If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).
*/
function search(array, value) {
    if(array.indexOf(value) < 0){
      return null
    }
    let copy = array.slice()
    while (copy.length > 1){
      if(value >= copy[Math.floor(copy.length / 2)]){
        copy = copy.slice(Math.floor(copy.length / 2))
        console.log(copy)
      } else {
        copy = copy.splice(0,Math.floor(copy.length / 2))
        console.log(copy)
      }
    }
    console.log(copy)
    return array.indexOf(copy[0])
  }
  var arr = [1, 3, 16, 22, 31, 33, 34]
  var result = search(arr, 31);
  console.log(result); //--> 4