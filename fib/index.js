// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// ------------------------------
// Attempt #1: Recursive

// function fib(n) {
//   if (n < 2) return n;
//   return fib(n - 1) + fib(n - 2);
// };

// ------------------------------
// Method #2: Memoize

function memoize(fn) {
  let cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    let ans = fn.apply(this, args);
    cache[args] = ans;
    return ans;
  };
};

function slowFib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

let fib = memoize(slowFib);

// TESTING
// var result = fib(4); // 3
// var result = fib(7); // 13
// var result = fib(9); // 34
// var result = fib(15); // 610
var result = fib(40); // 102334155

console.log(result);











// ------------------------------
// SOLUTION:

// function memoize(fn) {
//   const cache = {};
//   return function(...args) {
//     if (cache[args]) {
//       return cache[args];
//     }

//     const result = fn.apply(this, args);
//     cache[args] = result;

//     return result;
//   };
// }

// function slowFib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// const fib = memoize(slowFib);

// function fib(n) {
//   const result = [0, 1];
//
//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];
//
//     result.push(a + b);
//   }
//
//   return result[n];
// }