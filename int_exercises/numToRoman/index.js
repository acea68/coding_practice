// Time Limit 45 minutes
// Write a function numToRoman that takes in a number and returns a string of Roman numerals equal in value to the number.
// https://en.wikipedia.org/wiki/Roman_numerals

// I - 1
// V - 5
// X - 10
// L - 50
// C - 100
// D - 500
// M - 1000

// use subtraction until 0 to convert to roman numeral
    // create string to return
    // map objects of denominations to roman symbols
    // while num > 0
        // if num < 2 digits (ie. num = 1 digit)
            // check if special cases 4 & 9 
            // find largest denomiation without going over
            // update roman numeral stirng with denomination subtracted from num
        // if num > one digit
            // zero out anything after the first digit
            // check for special case
            // find largest denomiation without going over
            // update roman numeral string with denomination subtracted from num
    // return romanStr 

let numToRoman = function(num) {
    let romanStr = ''
    let romObj = {
        1:'I',
        5:'V',
        10:'X',
        50:'L',
        100:'C',
        500:'D',
        1000:'M'
    }
    let specialCases = {
        4:'IV',
        9:'IX',
        40:'XL',
        90:'XC',
        400:'CD',
        900:'CM'
    }
    while(num>0){
        if(num<10){
            if(specialCases[num]){
                romanStr+=specialCases[num]
                num -= num
            } else {
                let largestDenom = null
                for(let key in romObj){
                    if(num>=key){
                        largestDenom = key
                    }
                }
                num-=Number(largestDenom)
                romanStr +=romObj[largestDenom] 
            }
        } else {
            // create the digit + tail of zeroes number
            let arrStrNum = (num).toString().split('')
            let digitLength = arrStrNum.length // 
            let tailOfZeroes = []; 
            for (let i=0; i<digitLength-1; ++i) {
                tailOfZeroes.push(0)
            }
            let IntWithZeroes = Number(([arrStrNum[0]].concat(tailOfZeroes)).join(''))
            if(specialCases[IntWithZeroes]){
                romanStr += specialCases[IntWithZeroes]
                num -= IntWithZeroes
            } else {
                let largestDenom = null
                for(let key in romObj){
                    if(IntWithZeroes >= Number(key)){
                        largestDenom = Number(key)
                    }
                }
                num -= largestDenom
                romanStr += romObj[largestDenom] 
            }
        }
    }  
    return romanStr       
}

console.log("3912, MMMCMXII --->",numToRoman(3912)); 
console.log("2021, MMXXI --->", numToRoman(2021));
console.log("494, CDXCIV --->",numToRoman(494)); 
console.log("1999, MCMXCIX --->",numToRoman(1999)); 
console.log(numToRoman(4)); //'IV'
console.log(numToRoman(33)) //'XXXIII'

// function assertEquals(actual, expected, testName) {
//     for (let i in expected) {
//         if(actual.length === expected.length){
//             if (expected[i] !== actual[i]) {
//                 return console.log(`FAILED [${testName}] Expected "`+ expected +'" and got "'+ actual +'"."')
//             }
//         } else {
//             return console.log(`FAILED [${testName}] Expected "`+ expected +'" and got "'+ actual +'"."')
//         }
//     }
//     return console.log("passed");
// }
// let result = numToRoman(3912);
// assertEquals(result,'MMMCMXII','convert arabic number to roman numeral');

            // let tailOfZeroes = new Array(digitLength-1); 
            // for (let i=0; i<(digitLength-1); ++i) {
            //     tailOfZeroes[i] = 0;
            // }