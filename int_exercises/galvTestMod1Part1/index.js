// Exercise #1:
/* Inside of the main.js file complete the robotValueCounter function.
This function takes in three parameters robot1, robot2, and value.
The output should be an object with the value parameter as a key and
the number of occurrences of this value in robot1 and robot2.
Example
*/
var x13 = {
  name: 'x13',
  canFly: true,
  canCook: false,
  yearsInspected: [2002, 2005, 2010],
  fueledBy: "cookies",
  bestFriend: {
    name: "z09",
    yearsKnown: 4,
    isCharging: true
  }
};

var z09 = {
  name: 'z09',
  canFly: false,
  canCook: true,
  yearsInspected: [1998, 2005, 2018],
  fueledBy: "jealousy",
  bestFriend: {
    name: "r04",
    yearsKnown: 12,
    isCharging: false
  }
};

// example invocation:
robotValueCounter(x13, z09, false);

// example output:

{
  false: 3
}

/*
3 is the value in the result object because false appears as a value once in x13 and twice in z09.
Note: All input objects will have the same set of properties, though the values themselves may change.
Some things to consider:
	•	You can ignore index.html and style.scss, please write your code in main.js.
	•	Pseudocode used via comments is required.
	•	If you would like to debug using the console, then feel free to invoke robotValueCounter in the main.js file using the example data above. The Console panel on Codesignal will show the output of any console.log statements inside of main.js. Tip: If you are logging objects, try using JSON.stringify(obj, null, 2) to print objects. Including the null and 2 arguments will print the properties of objects in a readable way.
This is how we could organize the requirements of the problem according to the first step of the problem solving process:
I: Two objects, robot1 and robot2 and some `value`.
O: An object with a key of `value` and whose value is
 the number of occurrences of `value` in both `robot1` and robot2`.
 See example invocation and output above.
C: None.
E: None. We can assume `robot1` and `robot2` will always
 have the same structure.
	•	[execution time limit] 60 seconds
  */

// Answer:
var robotValueCounter = function(robot1, robot2, value) {
    var globalCount = 0;
    var countingFunc = function(obj) {
        var localCount = 0;
        for (var key in obj) {
            if (obj[key] === value ) {
                localCount ++;
            } else if (typeof obj[key] === 'object') {
                for (var k in obj[key]) {
                    if (obj[key][k] === value ) {
                        localCount ++;
                    }
                }
            }
        }
        return localCount;
    };
    globalCount = countingFunc(robot1) + countingFunc(robot2);
    var resultObj = {};
    resultObj[value] = globalCount;
    return resultObj;

/*
    // define counter variable to store # of 'value' appearances
    var counter = 0;
    // iterate thru first robot
    // access each property and
    for (var key in robot1) {
        // if value matches 'value' parameter
        if (robot1[key] === value ) {
            // add one to counter
            counter ++
            // check for one layer of nested objects
        } else if (typeof robot1[key] === 'object') {
            for (var k in robot1[key]) {
                if (robot1[key][k] === value ) {
                    counter ++
                }
            }
        }
    }
    // repeat process for second robot:
    // iterate thru second robot
    // access each property and
    for (var key in robot2) {
    // if value matches 'value' parameter
        if (robot2[key] === value ) {
            // add one to counter
            counter ++
            // check for one layer of nested objects
        } else if (typeof robot2[key] === 'object') {
            for (var k in robot2[key]) {
                if (robot2[key][k] === value ) {
                    counter ++
                }
            }
        }
    }
    // create return object:
    var resultObj = {};
    // key will be 'value' parameter passed in
    // value will be the counter variable total
    resultObj[value] = counter;
    // return result obj
    return resultObj;
*/
};


// var x13 = {
//   name: 'x13',
//   canFly: true,
//   canCook: false,
//   yearsInspected: [2002, 2005, 2010],
//   fueledBy: "cookies",
//   bestFriend: {
//     name: "z09",
//     yearsKnown: 4,
//     isCharging: true
//   }
// };

// var z09 = {
//   name: 'z09',
//   canFly: false,
//   canCook: true,
//   yearsInspected: [1998, 2005, 2018],
//   fueledBy: "jealousy",
//   bestFriend: {
//     name: "r04",
//     yearsKnown: 12,
//     isCharging: false
//   }
// };

// // example invocation:
// robotValueCounter(x13, z09, false);