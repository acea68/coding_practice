/*
Your company built an in -house calendar tool called HiCal.You want to add a feature to see the times in a day when everyone is available.
To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as a tuple of integers(start_time, end_time).These integers represent the number of 30 - minute blocks past 9: 00am.

For example:
(2, 3)  # Meeting from 10: 00 – 10: 30 am
(6, 9)  # Meeting from 12: 00 – 1: 30 pm

Write a function merge_ranges() that takes a list of multiple meeting time ranges and returns a list of condensed ranges.

For example, given:
[(0, 1), (3, 5), (4, 8), (10, 12), (9, 10)]

your function would return:
[(0, 1), (3, 8), (9, 12)]

Do not assume the meetings are in order.The meeting times are coming from multiple teams.

Write a solution that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges. Here we've simplified our times down to the number of 30-minute slots past 9:00 am. But we want the function to work even for very large numbers, like Unix timestamps. In any case, the spirit of the challenge is to merge meetings where start_time and end_time don't have an upper bound.
*/
// function mergeRanges(meetings) {
//   let start = 0, end = 0;
//   let result = [];
//   let isBusy = [];
//   for (let range of meetings) {
//     let busy = [range.startTime, range.endTime];
//     for (let i = busy[0]; i < busy[1]; i++) { // O(n2) worst case: last range in meetings is from beginning of day to EOD
//       isBusy[i] = true;
//     }
//   }
//   for (let i = 0; i < isBusy.length; i++) {
//     if (isBusy[i] === undefined) {
//       isBusy[i] = false;
//     }
//   }
//   let busyChunk = {};
//   for (let j = 0; j <= isBusy.length; j++) {
//     if (isBusy[j] && start === 0) {
//       start = j;
//       end = j;
//       busyChunk.startTime = start;
//     } else if (isBusy[j] && start !== 0) {
//       end = j;
//     } else if (!isBusy[j] && isBusy[j - 1]) {
//       busyChunk.endTime = end + 1;
//       result.push(busyChunk);
//       busyChunk = {};
//       start = 0;
//       end = j;
//     }
//   }
//   return result;
// };
function mergeRanges(meetings) {

  // Create a deep copy of the meetings array
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone
  const meetingsCopy = JSON.parse(JSON.stringify(meetings));

  // Sort by start time
  const sortedMeetings = meetingsCopy.sort((a, b) => {
    return a.startTime - b.startTime;
  });

  // Initialize mergedMeetings with the earliest meeting
  const mergedMeetings = [sortedMeetings[0]];

  for (let i = 1; i < sortedMeetings.length; i++) {
    const currentMeeting = sortedMeetings[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    // If the current meeting overlaps with the last merged meeting, use the
    // later end time of the two
    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
    } else {

      // Add the current meeting since it doesn't overlap
      mergedMeetings.push(currentMeeting);
    }
  }

  return mergedMeetings;
}

// Tests

// let result = mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }]);
// console.log('🚀 ~ result', result);
// let actual = mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 5, endTime: 8 }]);
// console.log('🚀 ~ actual', actual);

let desc = 'meetings overlap';
let actual = mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }]);
let expected = [{ startTime: 1, endTime: 4 }];
assertArrayEquals(actual, expected, desc);

desc = 'meetings touch';
actual = mergeRanges([{ startTime: 5, endTime: 6 }, { startTime: 6, endTime: 8 }]);
expected = [{ startTime: 5, endTime: 8 }];
assertArrayEquals(actual, expected, desc);

desc = 'meeting contains other meeting';
actual = mergeRanges([{ startTime: 1, endTime: 8 }, { startTime: 2, endTime: 5 }]);
expected = [{ startTime: 1, endTime: 8 }];
assertArrayEquals(actual, expected, desc);

desc = 'meetings stay separate';
actual = mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }]);
expected = [{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }];
assertArrayEquals(actual, expected, desc);

desc = 'multiple merged meetings';
actual = mergeRanges([
  { startTime: 1, endTime: 4 },
  { startTime: 2, endTime: 5 },
  { startTime: 5, endTime: 8 },
]);
expected = [{ startTime: 1, endTime: 8 }];
assertArrayEquals(actual, expected, desc);

desc = 'meetings not sorted';
actual = mergeRanges([
  { startTime: 5, endTime: 8 },
  { startTime: 1, endTime: 4 },
  { startTime: 6, endTime: 8 },
]);
expected = [{ startTime: 1, endTime: 4 }, { startTime: 5, endTime: 8 }];
assertArrayEquals(actual, expected, desc);

desc = 'oneLongMeetingContainsSmallerMeetings';
actual = mergeRanges([
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 5 },
  { startTime: 6, endTime: 8 },
  { startTime: 9, endTime: 10 },
  { startTime: 10, endTime: 12 }
]);
expected = [
  { startTime: 1, endTime: 12 }
];
assertArrayEquals(actual, expected, desc);

desc = 'sample input';
actual = mergeRanges([
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
]);
expected = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
];
assertArrayEquals(actual, expected, desc);

function assertArrayEquals(a, b, desc) {
  // Sort the keys in each meeting to avoid
  // failing based on differences in key order.
  let orderedA = a.map(function (meeting) {
    return JSON.stringify(meeting, Object.keys(meeting).sort());
  });
  let orderedB = b.map(function (meeting) {
    return JSON.stringify(meeting, Object.keys(meeting).sort());
  });
  const arrayA = JSON.stringify(orderedA);
  const arrayB = JSON.stringify(orderedB);
  if (arrayA !== arrayB) {
    console.log(`${desc} ... FAIL: ${JSON.stringify(a)} != ${JSON.stringify(b)}`)
  } else {
    console.log(`${desc} ... PASS`);
  }
}