"use strict";

/*
You are running a classroom and suspect that some of your students are passing around the answers to multiple choice questions disguised as random strings.

Your task is to write a function that, given a list of words and a string, finds and returns the word in the list that is scrambled up inside the string, if any exists. There will be at most one matching word. The letters don't need to be in order or next to each other. The letters cannot be reused.

Example:
words = ['cat', 'baby', 'dog', 'bird', 'car', 'ax']
string1 = 'tcabnihjs'
find_embedded_word(words, string1) -> cat (the letters do not have to be in order)

string2 = 'tbcanihjs'
find_embedded_word(words, string2) -> cat (the letters do not have to be together)

string3 = 'baykkjl'
find_embedded_word(words, string3) -> None / null (the letters cannot be reused)

string4 = 'bbabylkkj'
find_embedded_word(words, string4) -> baby

string5 = 'ccc'
find_embedded_word(words, string5) -> None / null

string6 = 'breadmaking'
find_embedded_word(words, string6) -> bird

All Test Cases:
find_embedded_word(words, string1) -> cat
find_embedded_word(words, string2) -> cat
find_embedded_word(words, string3) -> None / null
find_embedded_word(words, string4) -> baby
find_embedded_word(words, string5) -> None / null
find_embedded_word(words, string6) -> bird

Complexity analysis variables:

W = number of words in `words`
S = maximal length of each word or string
*/


const words = ["cat", "baby", "dog", "bird", "car", "ax"];

const string1 = "tcabnihjs";
const string2 = "tbcanihjs";
const string3 = "baykkjl";
const string4 = "bbabylkkj";
const string5 = "ccc";
const string6 = "breadmaking";

// map out each input string in the input array
  // contain char as the key, count as the value
// repeat same process for input string given
// for each prop in the iterated word, match count in input str (or greater)
// if all props match (or are greater than in the input string), return that iterated str
function find_embedded_word(words, string){
  let mapStr = {};
  for(let i = 0; i < string.length; i++) {
    if (mapStr[string[i]]) {
      mapStr[string[i]] = mapStr[string[i]]++;
    } else {
        mapStr[string[i]] = 1;
    }
  }
  for(let j = 0; j < words.length; j++) {
    let subMap = {};
    for (let k = 0; k < words[j].length; k++) {
      if (subMap[words[j][k]]) {
        subMap[words[j][k]] = subMap[words[j][k]]++;
    } else {
        subMap[words[j][k]] = 1;
    }
    }
    console.log(subMap)
      console.log(Object.keys(subMap));
    for (let l = 0; l < Object.keys(subMap); l++) {
      if(!mapStr[Object.keys(subMap[l])] >= Object.keys(subMap)[l]){
        break;
      }
    }
    return words[j];
  }

  return null;
}
// console.log(find_embedded_word(words, string1));
// console.log(find_embedded_word(words, string2));
// console.log(find_embedded_word(words, string3));
console.log(find_embedded_word(words, string4));
// console.log(find_embedded_word(words, string5));
// console.log(find_embedded_word(words, string6));

