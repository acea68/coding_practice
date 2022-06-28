/* You want to build a word cloud, an infographic where the size of a word corresponds to how often it appears in the body of text.
To do this, you'll need data. Write code that takes a long string and builds its word cloud data in a map, where the keys are words and the values are the number of times the words occurred.
We'll use a JavaScript Map instead of an object because it's more explicit—we're mapping words to counts. And it'll be easier and cleaner when we want to iterate over our data.
Think about capitalized words. For example, look at these sentences:
  "After beating the eggs, Dana read the next step:"
"Add milk and eggs, then add flour and sugar."
What do we want to do with "After", "Dana", and "add"? In this example, your final map should include one "Add" or "add" with a value of 2. Make reasonable (not necessarily perfect) decisions about cases like "After" and "Dana".
Assume the input will only contain words and standard punctuation.
You could make a reasonable argument to use regex in your solution. We won't, mainly because performance is difficult to measure and can get pretty bad. */
class WordCloudData {
  constructor(inputString) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);

    // this.isLetter(character);
    // this.splitWords(string);
    // this.addWordToMap(word);
    // this.capitalize(word);
  }

  populateWordsToCounts(inputString) {
    let wordStartIndex = 0;
    let wordLen = 0;
    for (let i = 0; i < inputString.length; i++) {
      let char = inputString[i];
      if (i === inputString.length - 1) {
        if (this.isLetter(char)) {
          wordLen++;
        }
        if (wordLen > 0) {
          let word = inputString.slice(wordStartIndex, wordStartIndex + wordLen);
          this.addWordToMap(word);
        }
      } else if (char === ' ' || char === '—') { // checks for em dash = option + shift + dash
        if (wordLen > 0) {
          let word = inputString.slice(wordStartIndex, wordStartIndex + wordLen);
          this.addWordToMap(word);
          wordLen = 0;
        }
      } else if (char === '.') { // checks for ellipses
        if (i < inputString.length - 1 && inputString[i + 1] === '.') {
          if (wordLen > 0) {
            let word = inputString.slice(wordStartIndex, wordStartIndex + wordLen);
            this.addWordToMap(word);
            wordLen = 0;
          }
        }
      } else if (this.isLetter(char) || char === '\'') { // checks for apostrophe
        if (wordLen === 0) {
          wordStartIndex = i;
        }
        wordLen++;
      } else if (char === '-') { // checks for regular dash/hyphen
        if (i > 0 && this.isLetter(inputString[i - 1]) && this.isLetter(inputString[i + 1])) {
          wordLen++;
        } else {
          if (wordLen > 0) {
            let word = inputString.slice(wordStartIndex, wordStartIndex + wordLen);
            this.addWordToMap(word);
            wordLen = 0;
          }
        }
      }
    }
  }
  isLetter(char) {
    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(char) > -1;
  }
  // splitWords(string) {
  //   let words = [];
  //   let wordStartIndex = 0;
  //   let wordLen = 0;
  //   for (let i = 0; i < string.length; i++) {
  //     let char = string[i];
  //     if (this.isLetter(char)) {
  //       if (wordLen === 0) {
  //         wordStartIndex = i;
  //       }
  //       wordLen++;
  //     } else {
  //       let word = string.slice(wordStartIndex, wordStartIndex + wordLen);
  //       words.push(word);
  //       wordLen = 0;
  //     }
  //   }
  //   return words;
  // }
  addWordToMap(word) {
    let newCount;
    if (this.wordsToCounts.has(word)) {
      newCount = this.wordsToCounts.get(word) + 1;
      this.wordsToCounts.set(word, newCount);
    } else if (this.wordsToCounts.has(word.toLowerCase())) {
      newCount = this.wordsToCounts.get(word.toLowerCase()) + 1;
      this.wordsToCounts.set(word, newCount);
    } else if (this.wordsToCounts.has(this.capitalize(word))) {
      newCount = this.wordsToCounts.get(this.capitalize(word)) + 1;
      this.wordsToCounts.set(word, newCount);
      this.wordsToCounts.delete(this.capitalize(word))
    } else {
      this.wordsToCounts.set(word, 1);
    }
  }
  capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }
  // populateWordsToCounts(inputString) {
  //   // Count the frequency of each word
  //   let string = inputString.replace(/[^a-zA-Z ]/g, "");
  //   let array = string.split(' ');
  //   array.forEach(word => {
  //     word = word.toLowerCase();
  //     if (!this.wordsToCounts.has(word)) {
  //       this.wordsToCounts.set(word, 1)
  //     } else {
  //       // var count = this.wordsToCounts.get(word);
  //       // count++;
  //       this.wordsToCounts.set(word, this.wordsToCounts.get(word) + 1);
  //     }
  //   })
  //   return this.wordsToCounts;
  // }
}

// Tests

// There are lots of valid solutions for this one. You
// might have to edit some of these tests if you made
// different design decisions in your solution.

// var desc = 'simple sentence';
// var actual = new WordCloudData('I like cake').wordsToCounts;
// var expected = new Map([['I', 1], ['like', 1], ['cake', 1]]);
// assert(isMapsEqual(actual, expected), desc);

// var desc = 'longer sentence';
// var actual = new WordCloudData('Chocolate cake for dinner and pound cake for dessert').wordsToCounts;
// var expected = new Map([['and', 1], ['pound', 1], ['for', 2], ['dessert', 1],
// ['Chocolate', 1], ['dinner', 1], ['cake', 2]]);
// assert(isMapsEqual(actual, expected), desc);

var desc = 'punctuation';
var actual = new WordCloudData('Strawberry short cake? Yum!').wordsToCounts;
var expected = new Map([['cake', 1], ['Strawberry', 1], ['short', 1], ['Yum', 1]]);
assert(isMapsEqual(actual, expected), desc);

// var desc = 'hyphenated Words';
// var actual = new WordCloudData('Dessert - mille-feuille cake').wordsToCounts;
// var expected = new Map([['cake', 1], ['Dessert', 1], ['mille-feuille', 1]]);
// assert(isMapsEqual(actual, expected), desc);

// var desc = 'ellipses between words';
// var actual = new WordCloudData('Mmm...mmm...decisions...decisions').wordsToCounts;
// var expected = new Map([['mmm', 2], ['decisions', 2]]);
// assert(isMapsEqual(actual, expected), desc);

// var desc = 'apostrophes';
// var actual = new WordCloudData("Allie's Bakery: Sasha's Cakes").wordsToCounts;
// var expected = new Map([['Bakery', 1], ['Cakes', 1], ["Allie's", 1], ["Sasha's", 1]]);
// assert(isMapsEqual(actual, expected), desc);

function isMapsEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  for (let [key, val] of map1) {
    const testVal = map2.get(key);

    // In cases of an undefined value, make sure the key
    // actually exists on the object so there are no false positives
    if (testVal !== val || (testVal === undefined && !map2.has(key))) {
      return false;
    }
  }
  return true;
}

function assert(condition, desc) {
  if (condition) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL`);
  }
}