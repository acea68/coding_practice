// Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.
function findPairForSum(arr, target){
    for(let i = 0; i < arr.length; i++){
      let arrAfter = arr.slice().slice(i+1)
      let arrBefore = arr.slice(0, i)
      let compare = arrBefore.concat(arrAfter)
        for(let j = 0; j < compare.length; j++){
          if(arr[i] + compare[j] === target){
            let sumOfNumbers = []
            sumOfNumbers.push(arr[i], compare[j])
            // console.log('current: ', arr[i],'compare: ',compare)
            return sumOfNumbers
          }
        }
    }
  }
  var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
  console.log(pair); // --> [4, 5]