// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  console.log("inside reverseInt number: ", typeof(n))
    const reversed = n
      .toString()
      .split('')
      .reverse()
      .join('');
      console.log("inside reverseInt reversed: ", typeof(reversed))

    return parseInt(reversed) * Math.sign(n);
  }

  console.log("first: ", reverseInt(-981) === -189)
  console.log("second: ",reverseInt(-981))

module.exports = reverseInt;