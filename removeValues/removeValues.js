/*
1
removeArrayValues
Write a function called "removeArrayValues".
Given an object, "removeArrayValues" removes any properties whose values are arrays.
*/
function removeArrayValues(obj){
    for (let key in obj){
        if (Array.isArray(obj[key])){
            delete obj[key]
        }
    }
}
var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}
// removeArrayValues(obj);
// console.log(obj); // --> { b: 2 }
// ---------------------------
// ---------------------------
/*
2
removeNumberValues
Write a function called "removeNumberValues".
Given an object, "removeNumberValues" removes any properties whose values are numbers.
*/
function removeNumberValues(obj) {
    for (let key in obj){
        if(typeof(obj[key])==='number'){
            delete obj[key]
        }
    }
}
var obj = {
  a: 2,
  b: 'remaining',
  c: 4
};
// removeNumberValues(obj);
// console.log(obj); // --> { b: 'remaining' }
function removeStringValues(obj) {
    for (let key in obj){
        if (typeof(obj[key])==='string'){
            delete obj[key]
        }
    }
}
function removeNumbersLargerThan(num, obj) {
    for (let key in obj){
        if (obj[key]>num){
            delete obj[key]
        }
    }
}
function removeNumbersLessThan(num, obj) {
    for (let key in obj){
        if (obj[key]<num){
            delete obj[key]
        }
    }
}
function removeStringValuesLongerThan(num, obj) {
    for (let key in obj){
        if (obj[key].length>num){
            delete obj[key]
        }
    }
}
function removeEvenValues(obj) {
    for (let key in obj){
        if (obj[key]%2===0){
            delete obj[key]
        }
    }
}
function countNumberOfKeys(obj) {
    return Object.keys(obj).length
}
function removeOddValues(obj) {
    for (let key in obj){
        if (obj[key]%2===1){
            delete obj[key]    
        }
    }
}
function convertDoubleSpaceToSingle(str) {
    return str.split("  ").join(' ')
}
function joinThreeArrays(arr1, arr2, arr3) {
    return arr1.concat(arr2).concat(arr3)
}
// ---------------------------
// ---------------------------
/*
2
addToFrontOfNew
Submitted on Today at 5:24 PM
Write a function called "addToFrontOfNew".
Given an array and an element, "addToFrontOfNew" returns a new array containing 
all the elements of the given array, with the given element added to the front.
Important: It should be a NEW array instance, not the original array instance.
*/
function addToFrontOfNew(arr, element) {
    let newArr = arr.slice()
    newArr.unshift(element)
    return newArr
    // arr.unshift(element)
    // return arr
    // return element.concat(arr)
    // newArr = [element, ...arr];
    // return newArr;  
}
// var input = [1, 2];
// var output = addToFrontOfNew(input, 3);
// console.log(output); // --> [3, 1, 2];
// console.log(input); // --> [1, 2]
// ---------------------------
// ---------------------------
function addToBackOfNew(arr, element) {
    let newArr = arr.slice()
    newArr.push(element)
    return newArr
}
// ---------------------------
// ---------------------------
/*
4
getAllElementsButNth
Submitted on Today at 8:47 PM
Write a function called "getAllElementsButNth".
Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.
*/
function getAllElementsButNth(array, n) {
    array.splice(n,1)
    return array
}
var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']