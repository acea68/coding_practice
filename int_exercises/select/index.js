// ---------------------------
// ---------------------------
/*
1
select
Write a function called "select".
Given an array and an object, "select" returns a new object whose properties are those in the given object AND whose keys are present in the given array.
Notes:
If keys are present in the given array, but are not in the given object, it should ignore them.
It does not modify the passed in object.
*/
function select(arr, obj) {
    let newObj = {}
    for (let i=0;i<arr.length;i++){
        if(obj[arr[i]]){
            newObj[arr[i]]=obj[arr[i]]
        }
    }
    return newObj
}
var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }