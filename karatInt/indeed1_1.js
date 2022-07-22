"use strict";
// -----------------
// PROMPT #1
// -----------------

/*
You are in charge of a display advertising program. Your ads are displayed on websites all over the internet. You have some CSV input data that counts how many times that users have clicked on an ad on each individual domain. Every line consists of a click count and a domain name, like this:

counts = [ "900,google.com",
     "60,mail.yahoo.com",
     "10,mobile.sports.yahoo.com",
     "40,sports.yahoo.com",
     "300,yahoo.com",
     "10,stackoverflow.com",
     "20,overflow.com",
     "5,com.com",
     "2,en.wikipedia.org",
     "1,m.wikipedia.org",
     "1,mobile.sports",
     "1,google.co.uk"]

Write a function that takes this input as a parameter and returns a data structure containing the number of clicks that were recorded on each domain AND each subdomain under it. For example, a click on "mail.yahoo.com" counts toward the totals for "mail.yahoo.com", "yahoo.com", and "com". (Subdomains are added to the left of their parent domain. So "mail" and "mail.yahoo" are not valid domains. Note that "mobile.sports" appears as a separate domain near the bottom of the input.)

Sample output (in any order/format):

calculateClicksByDomain(counts) =>
com:                     1345
google.com:              900
stackoverflow.com:       10
overflow.com:            20
yahoo.com:               410
mail.yahoo.com:          60
mobile.sports.yahoo.com: 10
sports.yahoo.com:        50
com.com:                 5
org:                     3
wikipedia.org:           3
en.wikipedia.org:        2
m.wikipedia.org:         1
mobile.sports:           1
sports:                  1
uk:                      1
co.uk:                   1
google.co.uk:            1

n: number of domains in the input
(individual domains and subdomains have a constant upper length)
*/

const counts = [
  "900,google.com",
  "60,mail.yahoo.com",
  "10,mobile.sports.yahoo.com",
  "40,sports.yahoo.com",
  "300,yahoo.com",
  "10,stackoverflow.com",
  "20,overflow.com",
  "5,com.com",
  "2,en.wikipedia.org",
  "1,m.wikipedia.org",
  "1,mobile.sports",
  "1,google.co.uk"
];

// i: array with string elements representing pair: number of clicks and domain name
// o: data structure presenting # clicks for each domain and subdomain
// c: symbols allowed, no negative # of clicks provided
// e: valid domains and subdomains only, check for empty input array

// let domainClicks = (arr) => {
//   // iterate thru arr
//   // create map obj containing subdomains and keys & aggregate clicks as values
//   // split each element into parsed # and domain
//   // nested: iterate thru each (sub)domain create map for each (sub)domain
//   // cumulatively add # to each (sub)domain encountered
//   // continue process for each element in input arr
//   // return data structure containing # of aggregate clicks and subdomain
//   let totalClicks = {};
//   arr.forEach(elem => {
//     let website = elem.split(',');
//     let clicks = parseInt(website[0]);
//     let subdomains = website[1].split('.');
//     let domainName = '';
//     for (let i = subdomains.length - 1; i >= 0; i--) {
//       domainName = subdomains[i] + domainName;
//       if (!totalClicks[domainName]) {
//         totalClicks[String(domainName)] = clicks;
//       } else {
//         totalClicks[String(domainName)] += clicks;
//       }
//       if (i - 1 >= -1) {
//         domainName = '.' + domainName
//       }
//     }
//   })
//   console.log(Object.keys(totalClicks))
//   return totalClicks;
// }

// console.log(domainClicks(counts));
// time: 30 minutes even (30:03)

// -----------------
// PROMPT #2
// -----------------

/*

Suppose we have an unsorted log file of accesses to web resources. Each log entry consists of an access time, the ID of the user making the access, and the resource ID.

The access time is represented as seconds since 00:00:00, and all times are assumed to be in the same day.

Return an object with the earliest time and latest time a user accessed any resource (max and min time)

const logs1 = [
  ["58523", "user_1", "resource_1"],
  ["62314", "user_2", "resource_2"],
  ["54001", "user_1", "resource_3"],
  ["200", "user_6", "resource_5"],
  ["215", "user_6", "resource_4"],
  ["54060", "user_2", "resource_3"],
  ["53760", "user_3", "resource_3"],
  ["58522", "user_22", "resource_1"],
  ["53651", "user_5", "resource_3"],
  ["2", "user_6", "resource_1"],
  ["100", "user_6", "resource_6"],
  ["400", "user_7", "resource_2"],
  ["100", "user_8", "resource_6"],
  [ "54359", "user_1", "resource_3"],
];

// const logs2 = [
//     ["300", "user_1", "resource_3"],
//     ["599", "user_1", "resource_3"],
//     ["900", "user_1", "resource_3"],
//     ["1199", "user_1", "resource_3"],
//     ["1200", "user_1", "resource_3"],
//     ["1201", "user_1", "resource_3"],
//     ["1202", "user_1", "resource_3"],
// ];

// const logs3 = [
//     ["300", "user_10", "resource_5"],
// ];

      Example Output with logs1 as input:

      {
  user_1: [ 54001, 58523 ],
  user_2: [ 54060, 62314 ],
  user_6: [ 2, 215 ],
  user_3: [ 53760, 53760 ],
  user_22: [ 58522, 58522 ],
  user_5: [ 53651, 53651 ],
  user_7: [ 400, 400 ],
  user_8: [ 100, 100 ]
}

*/

const logs1 = [
  ["58523", "user_1", "resource_1"],
  ["62314", "user_2", "resource_2"],
  ["54001", "user_1", "resource_3"],
  ["200", "user_6", "resource_5"],
  ["215", "user_6", "resource_4"],
  ["54060", "user_2", "resource_3"],
  ["53760", "user_3", "resource_3"],
  ["58522", "user_22", "resource_1"],
  ["53651", "user_5", "resource_3"],
  ["2", "user_6", "resource_1"],
  ["100", "user_6", "resource_6"],
  ["400", "user_7", "resource_2"],
  ["100", "user_8", "resource_6"],
  ["54359", "user_1", "resource_3"],
];

// i: arrays of elements representing a user, time loged in using a specific resource
// o: object with user and their respective min & max time logged using a resource
// c: only positive values for time (in sec) from midnight (0000)
// e: inupt is single user only, input is empty, input only has one logged entry

// let findTimes = logs => { // INCOMPLETE
//   // filter input array by user into subarrays by user
//   // sort arrays by times (min to max), keep corresponding resource
//   // append min & max time to result object
//   // return object
//   let result = {};
//   logs.forEach(entry => {
//     let user = entry[1];
//     let time = [parseInt(entry[0]), parseInt(entry[0])]; // [mix, max]
//     // console.log('🚀 ~ time', time);
//     if (!result[user]) {
//       result[user] = [entry[2], time];
//     } else {
//       if (!result[user][0]) {
//         result[user][0].push(time);
//       } else if (time[1] > result[user][0][1][1]) {
//         result[user][0][1][1] = time[1];
//       } else if (time[0] < result[user][0][0][0]) {
//         result[user][0][0][0] = time[0];
//       }
//     }
//   });
//   console.log('🚀 ~ result', result);
// }

// console.log(findTimes(logs1));

// --- SOLUTION ---

// function findTimes (times) {
//   let result = {};

//   for(let i = 0; i < times.length; i++) {
//     let currentUser = times[i][1];
//     let currentTime = parseInt(times[i][0]);

//     // console.log('currentUser:', currentUser);

//     if(result[currentUser] === undefined) {
//       result[currentUser] = [currentTime, currentTime];
//     } else {
//       let lowestTime = result[currentUser][0];
//       let highestTime = result[currentUser][1];

//       if(currentTime > highestTime) {
//         result[currentUser][1] = currentTime;

//       } else if(currentTime < lowestTime) {
//         result[currentUser][0] = currentTime;
//       }
//     }
//   }

//   // console.log(result)


//   return result;
// }

// console.log(findTimes(logs1));

// -----------------
// PROMPT #3
// -----------------

/*
You are a developer for a university. Your current project is to develop a system for students to find courses they share with friends. The university has a system for querying courses students are enrolled in, returned as a list of (ID, course) pairs.

Write a function that takes in a collection of (student ID number, course name) pairs and returns, for every pair of students, a collection of all courses they share.


Sample Input:

enrollments1 = [
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"],
]

{Linear Algebra: [58, 17]}


Sample Output (pseudocode, in any order):

find_pairs(enrollments1) =>
{
  "58,17": ["Software Design", "Linear Algebra"]
  "58,94": ["Economics"]
  "58,25": ["Economics"]
  "94,25": ["Economics"]
  "17,94": []
  "17,25": []
}



Additional test cases:

Sample Input:

enrollments2 = [
  ["0", "Advanced Mechanics"],
  ["0", "Art History"],
  ["1", "Course 1"],
  ["1", "Course 2"],
  ["2", "Computer Architecture"],
  ["3", "Course 1"],
  ["3", "Course 2"],
  ["4", "Algorithms"]
]



Sample output:

find_pairs(enrollments2) =>
{
  "1,0":[]
  "2,0":[]
  "2,1":[]
  "3,0":[]
  "3,1":["Course 1", "Course 2"]
  "3,2":[]
  "4,0":[]
  "4,1":[]
  "4,2":[]
  "4,3":[]
}

Sample Input:
enrollments3 = [
  ["23", "Software Design"],
  ["3", "Advanced Mechanics"],
  ["2", "Art History"],
  ["33", "Another"],
]


Sample output:

find_pairs(enrollments3) =>
{
  "23,3": []
  "23,2": []
  "23,33":[]
  "3,2":  []
  "3,33": []
  "2,33": []
}

All Test Cases:
find_pairs(enrollments1)
find_pairs(enrollments2)
find_pairs(enrollments3)

Complexity analysis variables:

n: number of student,course pairs in the input
s: number of students
c: total number of courses being offered (note: The number of courses any student can take is bounded by a small constant)
*/

const enrollments1 = [
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"]
];

const enrollments2 = [
  ["0", "Advanced Mechanics"],
  ["0", "Art History"],
  ["1", "Course 1"],
  ["1", "Course 2"],
  ["2", "Computer Architecture"],
  ["3", "Course 1"],
  ["3", "Course 2"],
  ["4", "Algorithms"]
];

const enrollments3 = [
  ["23", "Software Design"],
  ["3", "Advanced Mechanics"],
  ["2", "Art History"],
  ["33", "Another"]
];





// --- SOLUTION ---

// //helper function to group students inside the classNames
// function groupStudentsWithCourses(enrollments) {
//   let classesAndStudents = {};


//   for(let i = 0; i < enrollments.length; i++) {
//     let currentClass = enrollments[i][1];
//     let currentStudent = enrollments[i][0];

//     if(classesAndStudents[currentClass] === undefined) {
//       classesAndStudents[currentClass] = [currentStudent];
//     } else {
//       classesAndStudents[currentClass].push(currentStudent);
//     }
//   }


//   return classesAndStudents;

// }

// function groupStudentsWithMultipleCourses(enrollments) {
//   let coursesAndStudents = groupStudentsWithCourses(enrollments);
//   let coursesAndStudentsKeys = Object.keys(coursesAndStudents);


//   for(let i = 0; i < coursesAndStudentsKeys.length; i++) {
//     let currentCourse = coursesAndStudentsKeys[i];
//     let currentStudents = coursesAndStudents[currentCourse];

//     for(let j = 0; i < currentStudents.length; j++) {

//     }


//     console.log(currentCourse);
//     console.log(currentStudents);
//   }
// }

// groupStudentsWithMultipleCourses(enrollments1);

// console.log('ran')

// -----------------
// PROMPT #4
// -----------------

// Given a list of separated words, make every third word uppercase and make the rest of the words lower case

// i: list of separated words
// o: return list of words with every third word in uppercase
// e: empty list
// c: input list in array format? ...args format? string?

function upperCaseThirdWord(listOfWords) {
  // assume input is string
  let input = listOfWords.split(' ');
  for (let i = 2; i < input.length; i += 3) {
    input[i] = input[i].toUpperCase();
  }
  return input.join(' ');
}

console.log(upperCaseThirdWord('this is An Input STRING thing.. poop'));

// ----- SOLUTION ----- //

// const makeThirdUpperCase = function (inputString) {
//   let stringArray = inputString.split(' ');

//   for (let i = 0; i < stringArray.length; i++) {
//     if ((i + 1) % 3 === 0 && i !== 0) {
//       stringArray[i] = stringArray[i].toUpperCase();
//     } else {
//       stringArray[i] = stringArray[i].toLowerCase();
//     }
//   }

//   return stringArray.join(' ');
// };

// console.log(makeThirdUpperCase('this is An Input STRING thing.. poop'));

// -----------------
// PROMPT #5
// -----------------

/* Given an input string s, return the number of times there are 3 unique characters in a row without repeats.
For example:
s='abcaa'
output = 2
reason: abc are unique and non-repeating. bca are unique and non-repeating. caa has a repeating a.
*/


