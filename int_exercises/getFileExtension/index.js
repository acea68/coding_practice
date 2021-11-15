/* 
Write a JavaScript program to get the extension of a filename.
*/

function getFileExtension(str) {
   console.log(str.lastIndexOf('.'))
   console.log (str.length)
   return str.slice(str.lastIndexOf('.'), str.length);
}
// let getFileExtension = (str) => str.slice
// (str.lastIndexOf('.'));
console.log(getFileExtension('index.html'))
