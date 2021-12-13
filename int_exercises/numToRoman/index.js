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

// while num > 0
    // if num < 2 digits (ie. num = 1 digit)
        // check if special cases 4 & 9 
            // update roman numeral stirng with denomination
    // if num > one digit
        // zero out anything after the first digit
        // check for special case
        // subtract next highest denomination or special case from num
            // update roman numeral stirng with denomination
// return romanStr 

let numToRoman = function(num) {
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
    let romanStr = ''
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
            let digitLength = arrStrNum.length
            // let tailOfZeroes = new Array(digitLength-1); 
            // for (let i=0; i<(digitLength-1); ++i) {
            //     tailOfZeroes[i] = 0;
            // }
            let tailOfZeroes = []; 
            for (let i=0; i<digitLength-1; ++i) {
                tailOfZeroes.push(0)
            }
            let newDigit = Number(([arrStrNum[0]].concat(tailOfZeroes)).join(''))
            if(specialCases[newDigit]){
                romanStr+=specialCases[newDigit]
                num -= newDigit
            } else {
                let largestDenom = null
                for(let key in romObj){
                    if(newDigit>=key){
                        largestDenom = key
                    }
                }
                num-=Number(largestDenom)
                romanStr +=romObj[largestDenom] 
            }
        }
    }  
    return romanStr       
}

console.log("MMMCMXII --->",numToRoman(3912)); //'MMMCMXII'
console.log("MMCMXLIX --->", numToRoman(2949)); //'MMCMXLIX'
console.log('MCMXCIX:',numToRoman(1999)); //'MCMXCIX'
console.log(numToRoman(4)); //'IV'
console.log(numToRoman(33)) //'XXXIII'
console.log("MCMLXXXVII --->", numToRoman(1987)); 
