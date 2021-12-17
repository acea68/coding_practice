// Flip every pair of characters in a string.
function flipPairs(str){
    let flippedStr = ''
    for(let char = 0; char < str.length; char+=2){
      if(str[char + 1] === undefined){
        flippedStr += str[char]
        return flippedStr
      }
      flippedStr += str[char + 1] + str[char]
    }
    return flippedStr
  }
  
  // Example:
  var input = 'check out how interesting this problem is, it\'s insanely interesting!';
  var output = flipPairs(input);
  // console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
  let expected = "hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!"
  function assertEqual(actual, expected, testName){
    if(actual === expected){
      console.log('passed')
    } else {
      console.log(`FAILED ${testName} Expected, "${expected}" but got "${actual}"`)
    }
  }
  assertEqual(output, expected, 'flipping char in pairs')