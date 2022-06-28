/* Writing programming interview questions hasn't made me rich yet ... so I might give up and start trading Apple stocks all day instead.
First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.
So I grabbed Apple's stock prices from yesterday and put them in an array called stockPrices, where:

The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
The values are the price (in US dollars) of one share of Apple stock at that time.
So if the stock cost $500 at 10:30am, that means stockPrices[60] = 500.

Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.
For example:
const stockPrices = [10, 7, 5, 8, 11, 9];
getMaxProfit(stockPrices);
// Returns 6 (buying for $5 and selling for $11)
No "shorting"—you need to buy before you can sell. Also, you can't buy and sell in the same time step—at least 1 minute has to pass. */
function getMaxProfit(stockPrices) {
  if (stockPrices.length < 2) throw new Error('Not enough prices');
  let minPrice = stockPrices[0];
  let profit = stockPrices[1] - minPrice;
  for (let i = 1; i < stockPrices.length; i++) {
    let currPrice = stockPrices[i];
    let potentialProfit = currPrice - minPrice;
    profit = Math.max(potentialProfit, profit);
    minPrice = Math.min(minPrice, currPrice);
  }
  return profit;
}
// function getMaxProfit(stockPrices) {
//   // Calculate the max profit
//   if (stockPrices.length < 2) throw new Error('Not enough prices');
//   let minIndex = 0;
//   let maxIndex = 1;
//   let minVal = stockPrices[minIndex];
//   let maxVal = stockPrices[maxIndex];
//   let profit = maxVal - minVal;
//   for (let currIndex = 1; currIndex < stockPrices.length; currIndex++) {
//     let currVal = stockPrices[currIndex];
//     if (currVal < minVal && minIndex >= maxIndex && (stockPrices[currIndex + 1] > minVal)) {
//       minVal = currVal;
//       minIndex = currIndex;
//     } else if (currVal > maxVal && currIndex > minIndex) {
//       maxVal = currVal;
//       maxIndex = currIndex;
//       profit = maxVal - minVal;
//     }
//   }
//   return profit;
// }
// function getMaxProfit(stockPrices) {
//   // Calculate the max profit
//   if (stockPrices.length <= 1) throw new Error('Not enough trades');
//   let minVal, maxVal;
//   let minIndex, maxIndex;
//   let profit;
//   for (let currIndex = 0; currIndex < stockPrices.length; currIndex++) {
//     let currVal = stockPrices[currIndex];
//     if (minVal === undefined || (currVal < minVal && minIndex > maxIndex)) {
//       minVal = currVal;
//       minIndex = currIndex;
//     } else if (maxVal === undefined || (currVal > maxVal && currIndex > minIndex)) {
//       maxVal = currVal;
//       maxIndex = currIndex;
//       profit = maxVal - minVal;
//     }
//   }
//   return profit;
// }
// Tests

// var desc = 'price goes up then down';
// var actual = getMaxProfit([1, 5, 3, 2]);
// var expected = 4;
// assertEqual(actual, expected, desc);

var desc = 'price goes down then up';
var actual = getMaxProfit([7, 2, 8, 9]);
var expected = 7;
assertEqual(actual, expected, desc);

// var desc = 'big increase then small increase';
// var actual = getMaxProfit([2, 10, 1, 4]);
// var expected = 8;
// assertEqual(actual, expected, desc);

// var desc = 'price goes up all day';
// var actual = getMaxProfit([1, 6, 7, 9]);
// var expected = 8;
// assertEqual(actual, expected, desc);

// var desc = 'price goes down all day';
// var actual = getMaxProfit([9, 7, 4, 1]);
// var expected = -2;
// assertEqual(actual, expected, desc);

// var desc = 'price stays the same all day';
// var actual = getMaxProfit([1, 1, 1, 1]);
// var expected = 0;
// assertEqual(actual, expected, desc);

// var desc = 'error with empty prices';
// const emptyArray = () => (getMaxProfit([]));
// assertThrowsError(emptyArray, desc);

// var desc = 'error with one price';
// const onePrice = () => (getMaxProfit([1]));
// assertThrowsError(onePrice, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}