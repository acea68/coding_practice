"use strict";

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

// parse thru input array,
// create storage data structure (object)
// each element: split at the comma
// store count as a new property in storage obj
// begin reverse interation of the split domain name at the '.'
// check subdomain string vs the storage obj
  // if it does not exists, create a count with the number given
  // else, add the count to the existing value of corresponding subdomain
// return storage obj

function clickCount(counts) {
  let countObj = {};
  counts.forEach(count => {
    let website = count.split(','); // [ '##', 'domain']
    let subdoms = website[1].split('.'); // ['firstPortion', 'secondPortion', ...]
    let websiteName = subdoms[subdoms.length - 1];
      for (let i = subdoms.length - 1; i >= 0; i--) {
        if (!countObj[websiteName]) {
          countObj[websiteName] = parseInt(website[0]); // convert string to interger...CONFIRM on MDN
        } else {
          countObj[websiteName] += parseInt(website[0]);
        }
        websiteName = subdoms[i - 1] + '.' + websiteName;
        // console.log('subdoms:', subdoms)
      }
  });
  return countObj;
}

console.log(clickCount(counts));