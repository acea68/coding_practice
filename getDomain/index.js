/*
3
Extract a Domain Name
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
Input1: "http://github.com/carbonfive/raygun  " Output1: "github"
Input2: "http://www.zombie-bites.com  " Output2: "zombie-bites"
Input3: "https://www.cnet.com  " Output3: "cnet"
*/
function getDomain(url) {
  var result = '';
  if (url.indexOf('www.') > 0) {
  var before = 'www.';
  } else {
    var before = '://';
  }
  var after = '.com';
  return url.slice(url.indexOf(before) + before.length, url.indexOf(after))
}

var domain = getDomain('http://github.com/carbonfive/raygun'); // Output1: "github"
// var domain = getDomain('http://www.zombie-bites.com'); // Output2: "zombie-bites"
// var domain = getDomain('https://www.cnet.com'); // Output3: "cnet"
console.log(domain);