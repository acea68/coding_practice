/*
1
Object Practice - Average Price Shoes
Find the average price of all shoes. The average price should be an integer.
A few ideas:
Can you solve this by only using one for loop iterating over one array?
It may not be necessary to iterate over the entire currentInventory object to solve this problem.
To see the output of a console.log in the above code you will need to open up the Chrome Dev Tools console in this browser window.
*/
var currentInventory = {
  shoes: [
    {name: 'tasselled black low-top lace-up', price: 1000, designer: 'Brunello Cucinelli'},
    {name: 'tasselled green low-top lace-up', price: 1100, designer: 'Gucci'},
    {name: 'plain beige suede moccasin', price: 950, designer: 'Balenciaga'},
    {name: 'plain olive suede moccasin', price: 2000, designer: 'Balenciaga'}
  ],
  shirts: [
    {name: 'silk tall t-shirt', price: 1000, designer: 'Brunello Cucinelli'},
    {name: 'plain white t-shirt', price: 950, designer: 'Gucci'},
    {name: 'already popped collar', price: 900, designer: 'Balenciaga'}
  ],
  hats: [
    {name: 'red logo', price: 1000, designer: 'Brunello Cucinelli'},
    {name: 'tricorne', price: 700, designer: 'Gucci'},
    {name: 'viking helmet', price: 250, designer: 'Balenciaga'},
    {name: 'beret', price: 50, designer: 'Balenciaga'}
  ]
};

var avgPriceShoes = 0;
var totalShoesPrice = 0;
for(let obj = 0; obj < currentInventory.shoes.length; obj++){
  totalShoesPrice += currentInventory.shoes[obj].price
}
avgPriceShoes = totalShoesPrice/currentInventory.shoes.length
// console.log(avgPriceShoes)

// TODO
// Update avgPriceShoes to reflect the average price of all shoes in currentInventory
// ---------------------------
// ---------------------------
/*
2
Object Practice - Format Shirts Summary
Create a summary of all the shirts. The summary should be an array.
A few ideas:
Can you solve this by only using one for loop iterating over one array?
It may not be necessary to iterate over the entire currentInventory object to solve this problem.
*/
var currentInventory = {
  shoes: [
    {name: 'tasselled black low-top lace-up', price: 1000, designer: 'Brunello Cucinelli'},
    {name: 'tasselled green low-top lace-up', price: 1100, designer: 'Gucci'},
    {name: 'plain beige suede moccasin', price: 950, designer: 'Balenciaga'},
    {name: 'plain olive suede moccasin', price: 2000, designer: 'Balenciaga'}
  ],
  shirts: [
    {name: 'silk tall t-shirt', price: 1000, designer: 'Brunello Cucinelli'},
    {name: 'plain white t-shirt', price: 950, designer: 'Gucci'},
    {name: 'already popped collar', price: 900, designer: 'Balenciaga'}
  ],
  hats: [
    {name: 'red logo', price: 1000, designer: 'Brunello Cucinelli'},
    {name: 'tricorne', price: 700, designer: 'Gucci'},
    {name: 'viking helmet', price: 250, designer: 'Balenciaga'},
    {name: 'beret', price: 50, designer: 'Balenciaga'}
  ]
};

var summary = []
for(let i = 0; i < currentInventory.shirts.length; i++){
  // summary[i] = currentInventory.shirts[i].designer +' '+ currentInventory.shirts[i].name +' '+ currentInventory.shirts[i].price
  summary.push(currentInventory.shirts[i].designer +' '+ currentInventory.shirts[i].name +' '+ currentInventory.shirts[i].price)
}
console.log(summary)

// TODO
// Create an array of strings with a summary of all shirts with designer, name, and price.
// Partial example output: ['Brunello Cucinelli silk tall t-shirt 1000', ...];