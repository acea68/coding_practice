"use strict";

/*
We are working on a security system for a badged-access room in our company's building.

Given an ordered list of employees who used their badge to enter or exit the room, write a function that returns two collections:

1. All employees who didn't use their badge while exiting the room - they recorded an enter without a matching exit. (All employees are required to leave the room before the log ends.)

2. All employees who didn't use their badge while entering the room - they recorded an exit without a matching enter. (The room is empty when the log begins.)

Each collection should contain no duplicates, regardless of how many times a given employee matches the criteria for belonging to it.

records1 = [
  ["Martha",   "exit"],
  ["Paul",     "enter"],
  ["Martha",   "enter"],
  ["Steve",    "enter"],
  ["Martha",   "exit"],
  ["Jennifer", "enter"],
  ["Paul",     "enter"],
  ["Curtis",   "exit"],
  ["Curtis",   "enter"],
  ["Paul",     "exit"],
  ["Martha",   "enter"],
  ["Martha",   "exit"],
  ["Jennifer", "exit"],
  ["Paul",     "enter"],
  ["Paul",     "enter"],
  ["Martha",   "exit"],
  ["Paul",     "enter"],
  ["Paul",     "enter"],
  ["Paul",     "exit"],
  ["Paul",     "exit"]
]

Expected output: ["Paul", "Curtis", "Steve"], ["Martha", "Curtis", "Paul"]

Other test cases:

records2 = [
  ["Paul", "enter"],
  ["Paul", "exit"],
]

Expected output: [], []

records3 = [
  ["Paul", "enter"],
  ["Paul", "enter"],
  ["Paul", "exit"],
  ["Paul", "exit"],
]

Expected output: ["Paul"], ["Paul"]

records4 = [
  ["Paul", "enter"],
  ["Paul", "exit"],
  ["Paul", "exit"],
  ["Paul", "enter"],
]

Expected output: ["Paul"], ["Paul"]

All Test Cases:
mismatches(records1) => ["Paul", "Curtis", "Steve"], ["Martha", "Curtis", "Paul"]
mismatches(records2) => [], []
mismatches(records3) => ["Paul"], ["Paul"]
mismatches(records4) => ["Paul"], ["Paul"]

n: length of the badge records array
*/

const records1 = [
  ["Martha",   "exit"],
  ["Paul",     "enter"],
  ["Martha",   "enter"],
  ["Steve",    "enter"],
  ["Martha",   "exit"],
  ["Jennifer", "enter"],
  ["Paul",     "enter"],
  ["Curtis",   "exit"],
  ["Curtis",   "enter"],
  ["Paul",     "exit"],
  ["Martha",   "enter"],
  ["Martha",   "exit"],
  ["Jennifer", "exit"],
  ["Paul",     "enter"],
  ["Paul",     "enter"],
  ["Martha",   "exit"],
  ["Paul",     "enter"],
  ["Paul",     "enter"],
  ["Paul",     "exit"],
  ["Paul",     "exit"]
];

const records2 = [
  ["Paul", "enter"],
  ["Paul", "exit"]
];

const records3 = [
  ["Paul", "enter"],
  ["Paul", "enter"],
  ["Paul", "exit"],
  ["Paul", "exit"]
];

const records4 = [
  ["Paul", "enter"],
  ["Paul", "exit"],
  ["Paul", "exit"],
  ["Paul", "enter"]
];

// create two arrays: enterError and exitError
// create object to track employee status in building (boolean)
// iterate thru the input array
// if person has not entered and current action is exit, add to enterError
// conversely, if person has not exited and reenters, add to exitError
// return result arrays

function checkPresence (records){
  let enterError = [];
  let exitError = [];
  let employees = {};
  for (let i = 0; i < records.length; i++) {
    let person = records[i][0];
    let event = records[i][1];
    if (!employees[person] && event === 'enter') {
      employees[person] = {'name' : person, inBuilding: true};
    } else if (!employees[person] && event === 'exit' && enterError.indexOf(person) < 0) {
        enterError.push(person.name);
    } else if (employees[person] && event === 'exit' && !person.inBuilding && enterError.indexOf(person) < 0){
        enterError.push(person.name);
    } else if (employees[person] && event === 'enter' && !person.inBuilding && exitError.indexOf(person) < 0) {
      exitError.push(person.name);
    } else if (employees[person] && event === 'enter' && !person.inBuilding) {
      person.inBuilding = true;
    } else if (employees[person] && event === 'exit' && person.inBuilding) {
      person.inBuilding = false;
    }
    console.log(employees)
  }
  let result = [enterError, exitError]
  return result;
}

console.log(checkPresence(records1));