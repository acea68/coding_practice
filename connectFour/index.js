/*
2
Check Winner for Connect Four
Write a function called 'checkWinner'. This function will take an array with a length of 7. Each element of the array will be either; 'red', 'black', or 0. We can assume that no violation of either of these is possible (i.e. input will always be of length 7, and elements will only be 'red', 'black', or 0).
Your function should accept this array as its only parameter.
If there are 4 'red' elements consecutively in a row, 'checkWinner' should return the string: 'Red Wins!'. Similarly, if there are 4 'black' elements consecutively in a row, 'checkWinner' should return the string: 'Black Wins!'. If neither of these is the case, 'checkWinner' should return 'Draw!'.
*/
function checkWinner(arr){
    for(let i = 0; i < arr.length; i++){
      if(arr[i] !== 0 && arr[i+1] === arr[i] && arr[i+2] === arr[i] && arr[i+3] === arr[i]){
        return `${arr[i][0].toUpperCase() + arr[i].slice(1)} Wins!`
      }
    }
    return 'Draw!'
    // for(let start = 0; start < arr.length; start++){
    //   if(arr[start]!== 0){
    //     let checker = arr[start]
    //     for(let i = start + 1; i < arr.length; i++){
    //       if(arr[i] === checker){
    //         for(let j = i + 1; j < arr.length; j++){
    //           if(arr[j] === checker){
    //             for(let k = j + 1; k < arr.length; k++){
    //               if(arr[k] === checker){
    //                 console.log(start, arr[start], i, arr[i], j, arr[j], k, arr[k])
    //                 return `${checker[0].toUpperCase() + checker.slice(1)} Wins!`
    //               }
    //               break;
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
    // return 'Draw!'
  }
  let blackWinner = checkWinner(['black', 'red', 'black', 'black', 'black', 'black', 'red']);
  console.log(blackWinner); //-> 'Black Wins!'
  
  let redWinner = checkWinner([0,0,0, 'red', 'red', 'red', 'red']);
  console.log(redWinner); //-> 'Red Wins!'
  
  let draw = checkWinner(['red', 'red', 'red', 'black', 'red', 'black', 0]);
  console.log(draw); // -> 'Draw!'
  