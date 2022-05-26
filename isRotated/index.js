// Is one string a rotated version of another?

// Extra hint:
// If you double the string, you'll be to trivially find another string inside it using regular String methods.
// Doubled string: 'hello worldhello world'
// Search w/in it: '       orldhello w    '
function isRotated(str1, str2){
    if(str1.length !== str2.length){
      return false
    }
    // create matchingIndexes storage array
    let matchingIndexes = []
    // iterate though one string & compare to first string single char
    for(let i = 0; i < str1.length; i++){
        // if iterator matches first char of str1
            // store index in matchingIndexes
            // continue storing all matching chars' indexes
        if(str2[i] === str1[0]){
            matchingIndexes.push(i)
        }
    }
    // iterate through matchingIndexes to prepare for slicing and modification of str2 using a while loop (more elegant)
    while( matchingIndexes.length > 0 ){
        // make copy of str2 to prevent modifications 
        let copy2 = str2.split('').slice()
        // reduce the condition the while loop depends on & obtain first possible index
        var rotatedIndex = matchingIndexes.shift()
        // // shift str2 a distance corresponding to one of the matching chars using splice and store the new array (or change existing str2)
        copy2 = copy2.concat(copy2.splice(0, rotatedIndex))
        console.log(copy2)

        // var newArrayFront = []
        // var newArrayTail = []
        // console.log(copy2)
        // newArrayTail = copy2.slice(rotatedIndex)
        // // console.log(copy2, newArrayTail)
        // // append beginning chars to end if applicable
        // newArrayFront = copy2.splice(0, rotatedIndex)
        // console.log('altered copy2: ',copy2, newArrayFront, newArrayTail)
        // let newArray = newArrayTail.concat(newArrayFront)
        // if(isEqual(str1.split(''), newArray)){
        if(isEqual(str1.split(''), copy2)){
            return true
        }
    }
    return false
}
function isEqual(arr1, arr2){
    /* takes two arrays as input, compares them one elem at a time,
    returns true if both arrays are equal, false if they differ
    */
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false
        }
    }
    return true
}
console.log(isRotated('hello world','orldhello w'))
// String 1: 'hello world'
// String 2: 'orldhello w'