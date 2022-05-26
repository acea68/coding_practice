/*
3
A Request From Corporate
Let us walk through the idea for this problem, as it is somewhat more complex than usual. The problem will require you to write two functions. One function will accomplish a task of some kind, and the other function will be an assertion function which can be used to compare your answer with an expected answer.
The first function you will write will be called generateSampleView. The input for this function will always be an array of objects, theoretically the result of a call to an API, or database. generateSampleView will take this array as its parameter, and return an array of strings based upon conditions that we will describe in a moment. 
Note: your function will be tested with a longer input, but the format will remain consistent for each user in the input array.

Your function should examine each user object, and add to the array return value for this function one of the following:
-If the value of the id property is odd, add the user's email to the return array
-If the value of the id property is even, your function should create a new string for the given user, 
--add the street, suite, city, and zipcode, each separated by a space and a comma, as one string, to the return array

The second function you will write will be called assertArraysEqual. It will be a function that takes three parameters: actual will be an array of scalar values, and should ideally be the result of calling a function that you are testing. (presumably the function being tested should return an array of scalar values); expected, also an array of scalar values, should be the theoretical result of calling your function (or, what you "expect" the function to return). Finally, testName will be a string, and should describe what a call to assertArraysEqual is verifying about the function being tested.
Please DO NOT USE JSON.stringify(), Array.join(), or any other "convert both arrays to strings so I can compare two strings" type of technique to implement this.
There are typically two things that we must check in order to determine that two arrays of scalar values are indeed equal to one another. Do they have the same length, and do they contain the same values. Thus, your function must make a determination about these issues, then either log 'passed' to the console or else 'failed', as well as the testName to the console. The tests for this function will check to see if your console.log message for a passing case contains 'passed', and 'failed' for a failing case (both in lower case).
*/
function generateSampleView(arr) {
  let resultInfo = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]["id"] % 2 === 1) {
      resultInfo.push(arr[i]["email"]);
    } else if (arr[i]["id"] % 2 === 0) {
      resultInfo.push(
        `${arr[i]["address"]["street"]}, ${arr[i]["address"]["suite"]}, ${arr[i]["address"]["city"]}, ${arr[i]["address"]["zipcode"]}`
      );
    }
  }
  return resultInfo;
}
function assertArraysEqual(actual, expected, testName) {
  for (let i = 0; i < expected.length; i++) {
    if (actual[i].length !== expected[i].length) {
      return console.log("failed");
    }
    for (let j = 0; j < expected[i].length; j++) {
      if (actual[i][j] !== expected[i][j]) {
        return console.log("failed");
      }
    }
  }
  console.log("passed");
}
var users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];
var output = [
  "Sincere@april.biz",
  "Victor Plains, Suite 879, Wisokyburgh, 90566-7771",
];

let result = generateSampleView(users);
// console.log(result, output)
assertArraysEqual(result, output, "return email or address");
