// ---------------------------
// ---------------------------
/* 
Part A
You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.
1
001_FashionInventoryPart-A.md
Write a function that will take in this currentInventory array as its argument. Your function should access all the shoes across each designer and return them out in a flat list: {designer name} - {shoe name} - {price}{designer name} - {shoe name} - {price}
Observe that a "flat list" refers to a string where each new line is separated by the newline symbol. Also note that the "flat list" does not end with a newline symbol. There are, like all of the challenges in this course, tests attached to these exercises. However, in order to get the most effective practice, please continue to write your own unit tests.
*/
// var currentInventory = [
//   {
//     name: 'Brunello Cucinelli',
//     shoes: [
//       {name: 'tasselled black low-top lace-up', price: 1000},
//       {name: 'tasselled green low-top lace-up', price: 1100},
//       {name: 'plain beige suede moccasin', price: 950},
//       {name: 'plain olive suede moccasin', price: 1050}
//     ]
//   },
//   {
//     name: 'Gucci',
//     shoes: [
//       {name: 'red leather laced sneakers', price: 800},
//       {name: 'black leather laced sneakers', price: 900}
//     ]
//   }
// ];
function renderInventory(inventory) {
    let itemDescription = "";
    for (let famousDesigners of inventory) {
      let designerName = famousDesigners["name"];
      for (let eachShoe of famousDesigners["shoes"]) {
        let shoeName = eachShoe["name"];
        let shoePrice = eachShoe["price"];
        // itemDescription += `${designerName}\n${shoeName}\n${shoePrice}` + '\n'
        itemDescription += `${designerName}, ${shoeName}, ${shoePrice}` + "\n";
      }
    }
    return itemDescription.substring(0, itemDescription.length - 1);
  }
  //Create helper functions if needed
  // let result = renderInventory(currentInventory)
  // console.log(result)
  //...console output:
  // Brunello Cucinelli, tasselled black low-top lace-up, 1000
  // Brunello Cucinelli, tasselled green low-top lace-up, 1100
  // and so on...
  // Here is an example of a flat list in code:
  // var flatList = "First line\nSecond Line\nThird Line";
  // console.log(flatList);
  // ---------------------------
  // ---------------------------
  /* 
  1
  002_FashionInventoryPart-B.md
  Your function should return the average cost of all shoes per designer per the format at the bottom:
  */
  var currentInventory = [
    {
      name: "Brunello Cucinelli",
      shoes: [
        { name: "tasselled black low-top lace-up", price: 1000 },
        { name: "tasselled green low-top lace-up", price: 1100 },
        { name: "plain beige suede moccasin", price: 950 },
        { name: "plain olive suede moccasin", price: 1050 },
      ],
    },
    {
      name: "Gucci",
      shoes: [
        { name: "red leather laced sneakers", price: 800 },
        { name: "black leather laced sneakers", price: 900 },
      ],
    },
  ];
  function calculateAveragePricePerDesigner(inventory) {
    let avgShoeCost = {};
    avgShoeCost["designers"] = [];
    for (let designer of inventory) {
      let container = {};
      container["name"] = designer["name"];
      let avgCost = null;
      let shoeCostSum = null;
      for (let shoeObj of designer["shoes"]) {
        shoeCostSum += shoeObj["price"];
      }
      avgCost = shoeCostSum / designer["shoes"].length;
      container["averagePrice"] = avgCost;
      avgShoeCost["designers"].push(container);
    }
    return avgShoeCost;
  }
  // let result = calculateAveragePricePerDesigner(currentInventory)
  // var expected = {
  //   'designers': [
  //     {
  //       'name': 'Brunello Cucinelli',
  //       'averagePrice': 1025
  //     },
  //     {
  //       'name': 'Gucci',
  //       'averagePrice': 850
  //     }
  //   ]
  // };
  // let assertEquals = function(actual, expected, testName){
  //   if(JSON.stringify(actual) === JSON.stringify(expected)){
  //     console.log('passed')
  //   } else {
  //     console.log(`FAILED [${testName}] Expected "` + JSON.stringify(expected) + '" but got "' + JSON.stringify(actual) + '".')
  //   }
  // }
  // assertEquals(result, expected, 'average cost of shoes per designer')
  // ---------------------------
  // ---------------------------
  /* 
  Part C
  You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.
  It looks like this:
  
  1
  001_FashionInventoryPart-A.md
  Your task is to find all of the shoes with "black" in the name. Your function should filter these shoes, and return them in a "flat list" similarly to Part A:
  //...console output:
  Brunello Cucinelli, tasselled black low-top lace-up, 1000
  Gucci, black leather laced sneakers, 900
  Here is an example of a flat list in code:
  var flatList = "First line\nSecond Line\nThird Line";
  console.log(flatList);
  Observe that a "flat list" refers to a string where each new line is separated by the newline symbol. Also note that the "flat list" does not end with a newline symbol. There are, like all of the challenges in this course, tests attached to these exercises. However, in order to get the most effective practice, please continue to write your own unit tests.
  */
  function listAllBlackShoes(inventory) {
    let blackShoeString = "";
    for (let designer of inventory) {
      blackShoeString += designer["name"];
      for (let shoeDescriptions of designer["shoes"]) {
        if (shoeDescriptions["name"].indexOf("black") !== -1) {
          blackShoeString +=
          ", " +
          shoeDescriptions["name"] +
          ", " +
          shoeDescriptions["price"] +
          "\n";
        }
      }
    }
    return blackShoeString.substring(0, blackShoeString.length - 1);
  }
  var currentInventory = [
    {
      name: "Brunello Cucinelli",
      shoes: [
        { name: "tasselled black low-top lace-up", price: 1000 },
        { name: "tasselled green low-top lace-up", price: 1100 },
        { name: "plain beige suede moccasin", price: 950 },
        { name: "plain olive suede moccasin", price: 1050 },
      ],
    },
    {
      name: "Gucci",
      shoes: [
        { name: "red leather laced sneakers", price: 800 },
        { name: "black leather laced sneakers", price: 900 },
      ],
    },
  ];
  // let expected = "Brunello Cucinelli, tasselled black low-top lace-up, 1000\nGucci, black leather laced sneakers, 900"
  // function assertEquals(actual, expected, testName){
  //   if(JSON.stringify(actual) === JSON.stringify(expected)){
  //     console.log('passed')
  //   } else {
  //     console.log(`FAILED [${testName}] Expected "${JSON.stringify(expected)}" but got "${JSON.stringify(actual)}"`)
  //   }
  // }
  // let result = listAllBlackShoes(currentInventory)
  // assertEquals(result, expected, 'show black shoes only')
  // ---------------------------
  // ---------------------------
  /* 
  Part D
  1
  004_FashionInventoryPart-D.md
  The task now is to find all the laced shoes, but we are going to render them in a somewhat complex format. Your function should return shoe names that contain "lace" in them, and indicate which word contains "lace". The return value's format should be structured like this: (see below written code)
  There are no tests attached to this exercise. In order to get the most effective practice, please continue to write your own unit tests.
  */
  var currentInventory = [
    {
      name: "Brunello Cucinelli",
      shoes: [
        { name: "tasselled black low-top lace-up", price: 1000 },
        { name: "tasselled green low-top lace-up", price: 1100 },
        { name: "plain beige suede moccasin", price: 950 },
        { name: "plain olive suede moccasin", price: 1050 },
      ],
    },
    {
      name: "Gucci",
      shoes: [
        { name: "red leather laced sneakers", price: 800 },
        { name: "black leather laced sneakers", price: 900 },
      ],
    },
  ];
  function generateLaceDetails(currentInventory){
    let expectedResult = []
    for(let designer = 0; designer < currentInventory.length; designer++ ){
      for(let shoeDescription = 0; shoeDescription < currentInventory[designer]['shoes'].length; shoeDescription++ ){
        var laceUpShoes = {}
        laceUpShoes['nameWords'] = []
        laceUpShoes['targetWordIndex'] = null     
        let nameWords = currentInventory[designer]['shoes'][shoeDescription]['name']
        let nameWordsArray = nameWords.split(' ')
        for(let words = 0; words < nameWordsArray.length; words++ ){
          if(nameWordsArray[words].indexOf('lace') > -1){
            laceUpShoes['targetWordIndex'] = words 
            laceUpShoes['nameWords'] = nameWordsArray
            expectedResult.push(laceUpShoes)
          }
        }        
      }
    }
    return expectedResult
  }
  var expectedResult = [
    {
      nameWords: ["tasselled", "black", "low-top", "lace-up"],
      targetWordIndex: 3,
    },
    {
      nameWords: ["tasselled", "green", "low-top", "lace-up"],
      targetWordIndex: 3,
    },
    {
      nameWords: ["red", "leather", "laced", "sneakers"],
      targetWordIndex: 2,
    },
    {
      nameWords: ["black", "leather", "laced", "sneakers"],
      targetWordIndex: 2,
    },
  ];
  let result = generateLaceDetails(currentInventory)
  // console.log(result)
  function assertEquals(actual, expected, testName){
    if(JSON.stringify(actual) === JSON.stringify(expected)){
      console.log('passed')
    }
    else {
      console.log(`FAILED [${testName}] Expected "${JSON.stringify(expected)}" but got "${JSON.stringify(actual)}"`)
    }
  }
  assertEquals(result, expectedResult, 'display laced shoes')