// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

// e.g. transposeTwoStrings(['Hello','World']);

// should return:
// H W  
// e o  
// l r  
// l l  
// o d

function transposeTwoStrings(arr){
    let str1 = arr[0]
    let str2 = arr[1]
    for(let i = 0; i < arr[0].length; i++){
      let transposeArr = str1[i] + ' ' + str2[i]
      console.log(transposeArr)
    }
    return
  }
  console.log(transposeTwoStrings(['Hello','World']))