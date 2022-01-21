// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Warning: Regular Expressions (RegEx) are NOT ALLOWED on this assignment!

// Note: `cardNumber` will always be a string
// The Diner's Club network always starts with a 38 or 39 and is 14 digits long
// The American Express network always starts with a 34 or 37 and is 15 digits long
// Once you've read this, go ahead and try to implement this function, then return to the console.
var detectNetwork = function(cardNumber) {
  if ( cardNumber.slice(0, 2) === '38' || cardNumber.slice(0, 2) === '39') {
    if (cardNumber.length === 14) {
      return 'Diner\'s Club';
    }
  } else if ( cardNumber.slice(0, 2) === '34' || cardNumber.slice(0, 2) === '37') {
    if (cardNumber.length === 15) {
      return 'American Express';
    }
  } else if (
      cardNumber.slice(0, 4) === '4903' ||
      cardNumber.slice(0, 4) === '4905' ||
      cardNumber.slice(0, 4) === '4911' ||
      cardNumber.slice(0, 4) === '4936' ||
      cardNumber.slice(0, 4) === '6333' ||
      cardNumber.slice(0, 4) === '6759' ||
      cardNumber.slice(0, 6) === '564182' ||
      cardNumber.slice(0, 6) === '633110' ) {
    if (
      cardNumber.length === 16 ||
      cardNumber.length === 18 ||
      cardNumber.length === 19 ) {
      return 'Switch';
    }
  } else if ( cardNumber[0] === '4') {
    if (
      cardNumber.length === 13 ||
      cardNumber.length === 16 ||
      cardNumber.length === 19 ) {
      return 'Visa';
    }
  } else if (
      cardNumber.slice(0, 2) === '51' ||
      cardNumber.slice(0, 2) === '52' ||
      cardNumber.slice(0, 2) === '53' ||
      cardNumber.slice(0, 2) === '54' ||
      cardNumber.slice(0, 2) === '55' ) {
    if ( cardNumber.length === 16 ) {
      return 'MasterCard';
    }
  } else if (
      cardNumber.slice(0, 4) === '6011' ||
      cardNumber.slice(0, 3) === '644' ||
      cardNumber.slice(0, 3) === '645' ||
      cardNumber.slice(0, 3) === '646' ||
      cardNumber.slice(0, 3) === '647' ||
      cardNumber.slice(0, 3) === '648' ||
      cardNumber.slice(0, 3) === '649' ||
      cardNumber.slice(0, 2) === '65' ) {
    if ( cardNumber.length === 16 || cardNumber.length === 19 ) {
      return 'Discover';
    }
  } else if (
      cardNumber.slice(0, 4) === '5018' ||
      cardNumber.slice(0, 4) === '5020' ||
      cardNumber.slice(0, 4) === '5038' ||
      cardNumber.slice(0, 4) === '6304' ) {
    if (
      cardNumber.length === 12 ||
      cardNumber.length === 13 ||
      cardNumber.length === 14 ||
      cardNumber.length === 15 ||
      cardNumber.length === 16 ||
      cardNumber.length === 17 ||
      cardNumber.length === 18 ||
      cardNumber.length === 19 ) {
      return 'Maestro';
    }
  } else if (
      cardNumber.slice(0, 3) === '624' ||
      cardNumber.slice(0, 3) === '625' ||
      cardNumber.slice(0, 3) === '626' ) {
    if (
      cardNumber.length === 16 ||
      cardNumber.length === 17 ||
      cardNumber.length === 18 ||
      cardNumber.length === 19 ) {
      return 'China UnionPay';
    }
  } else if (
      Number(cardNumber.slice(0, 4)) >= 6282 &&
      Number(cardNumber.slice(0, 4)) <= 6288 ) {
    if (
      cardNumber.length === 16 ||
      cardNumber.length === 17 ||
      cardNumber.length === 18 ||
      cardNumber.length === 19 ) {
      return 'China UnionPay';
    }
  } else if (
      Number(cardNumber.slice(0, 6)) >= 622126 &&
      Number(cardNumber.slice(0, 6)) <= 622925 ) {
    if (
      cardNumber.length === 16 ||
      cardNumber.length === 17 ||
      cardNumber.length === 18 ||
      cardNumber.length === 19 ) {
      return 'China UnionPay';
    }
  }
};

detectNetwork('38345678901234'); // Diner's Club
detectNetwork('39345678901234'); // Diner's Club
detectNetwork('343456789012345'); // American Express
detectNetwork('373456789012345'); // American Express
detectNetwork('4123456789012'); // (Visa)
detectNetwork('4123456789012345'); // (Visa)
detectNetwork('4123456789012345678'); // (Visa)
detectNetwork('5112345678901234'); // (MasterCard)
detectNetwork('5212345678901234'); // (MasterCard)
detectNetwork('5312345678901234'); // (MasterCard)
detectNetwork('5412345678901234'); // (MasterCard)
detectNetwork('5512345678901234'); // (MasterCard)
detectNetwork('6011345678901234'); // (Discover)
detectNetwork('6011345678901234567'); // (Discover)
detectNetwork('6443456789012345'); // (Discover)
detectNetwork('6443456789012345678'); // (Discover)
detectNetwork('6534567890123456789'); // (Discover)
detectNetwork('501856789012'); // Maestro
detectNetwork('5018567890123'); // Maestro
detectNetwork('501856789012345678'); // Maestro
detectNetwork('5018567890123456789'); // Maestro