// Time Limit 45 minutes
// Write a function toggleCase which takes in a string and returns a new string where all the lowercase 
// letters are changed to uppercase and all the uppercase letters are changed to lowercase.
function toggleCase(str){
    let toggleArray = []
    for(let i = 0;i<str.length;i++){
        if(str[i]!==str[i].toUpperCase()){
            toggleArray.push(str[i].toUpperCase())
        } else {
            toggleArray.push(str[i].toLowerCase())
        }
    }
    return toggleArray.join('')
}
console.log(toggleCase('MaRio')); //'mArIO'
console.log(toggleCase('PRP')); //'prp'
console.log(toggleCase('Good news, everyone!')); //'gOOD NEWS, EVERYONE!'