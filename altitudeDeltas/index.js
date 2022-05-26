/*
1
Altitude Deltas
Please write a function that takes an array of integer altitudes along a hiking trail, as well as two indexes into that array. The two indexes represent the start and end of a segment in the array. We can assume that the array will only contain integers, and that the two indexes will be valid (i.e. they will exist in the input array, and will make sense compared to each other - start is before end).
Your function should return the "sum of the changes for a walk within that segment" (i.e., beginning at the start index and ending at the end index). Each integer in the array represents another height on the trail, so "walking" will mean accumulating each change in height into a "sum of the changes".
Note that increases in height count double.
Here are some examples of your code running, assuming you have successfully created the described function. Please be sure to name the function "sumAltitudeDeltas".
*/
function sumAltitudeDeltas(arr, ind1, ind2){
    let sumDelta = 0
    for(let i = ind1; i <= ind2 - 1; i++){
      let checkUphill = Math.abs(arr[i] - arr[i + 1])
      if(arr[i + 1] > arr[i]){
        checkUphill *= 2
      }
      sumDelta += checkUphill
    }
    return sumDelta
  }
//   let output_0 = sumAltitudeDeltas([1, 2, 3, 1], 0, 3);
//   console.log(output_0); //--> 6
  
//   let output_1 = sumAltitudeDeltas([5, 3, 6, 7, 2], 2, 4);
//   console.log(output_1); //--> 7
  
//   let output_2 = sumAltitudeDeltas([5, 3, 6, 7, 2], 0, 1);
//   console.log(output_2); //--> 2
  
//   let output_3 = sumAltitudeDeltas([5, 3, 6, 7, 2], 0, 4);
//   console.log(output_3); //--> 15
  
//   let output_4 = sumAltitudeDeltas([4, 1, 4, 0, 20, 13], 1, 4);
//   console.log(output_4); //--> 50
// ------------------------------
// ------------------------------
