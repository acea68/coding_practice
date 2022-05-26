/* Exercise 4:
Write a JavaScript program to get the current date. 
Expected output: 
mm-dd-yyy, mm/dd/yyy or dd-m-yyyy, dd/mm/yyyy
*/

function formatDate (date = new Date()) {
    const days = date.getDate() + 1;
    const months = date.getMonth() + 1;
    const years = date.getFullYear();
    return `${months}/${days}/${years}`; 
}

// const formatDate = (date = new Date()) => {
//     const days = date.getDate() + 1;
//     const months = date.getMonth() + 1;
//     const years = date.getFullYear();
//     return `${months}/${days}/${years}`;
// }

console.log(formatDate());