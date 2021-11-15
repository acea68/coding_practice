/* Write a program that returns the filetype of a file.
*/

function getFileExtension(str) {
    // console.log(str.lastIndexOf('.'))
    // console.log(str.length)
    return str.slice(str.lastIndexOf('.'), str.length)
}
console.log(getFileExtension('goodMorning.html'))