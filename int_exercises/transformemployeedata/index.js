// Convert a Complex Array to an Object
// 20
// Write a function called transformEmployeeData that 
// transforms some employee data from one format to another.

// The argument will look like this:

// var input = [
//     [
//         ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
//     ],
//     [
//         ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
//     ]
// ];
// Given that input, the return value should look like this:

// var result = [
//     {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
//     {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
// ]
// Note that the input may have a different number of rows 
// (more employees) or different keys than the given sample.

function transformEmployeeData(employeeData) {
    let objList = [];
    let subObj = {};
    
    for (let bigBucket of employeeData) 
      {
      for (let dataPair of bigBucket) 
          {
          subObj[dataPair[0]] = dataPair[1]
          }
          objList.push(subObj)
          subObj = {}
      }      
  return objList
  }

let input = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];
console.log("before: ", input)
console.log("after: ",transformEmployeeData(input))