/*
You're working on a secret team solving coded transmissions.
Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.
Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place.
Why an array of characters instead of a string?
The goal of this question is to practice manipulating strings in place. Since we're modifying the message, we need a mutable type like an array, instead of JavaScript's immutable strings.
For example:
  const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];
reverseWords(message);
console.log(message.join(''));
// Prints: 'steal pound cake'
JavaScript
When writing your function, assume the message contains only letters and spaces, and all words are separated by one space.
*/
import { reverse } from '../ic_reverseStrings/index.js';

function reverseWords(message) {
  reverse(message);
  let word = [];
  let start = 0;
  let end = 0;
  for (let i = 0; i < message.length; i++) {
    while (message[i] !== ' ' && i < message.length) {
      end++
      word.push(message[i]);
      i++;
    }
    if (message[i] === ' ' || i === message.length) {
      message.splice(start, word.length, ...reverse(word))
      start = i + 1;
      end = i + 1;
      word = [];
    }
  }
  let result = message.join('');
  return result;
}

// TESTING
let desc = 'test one sentence';
let input = ['c', 'a', 'k', 'e', ' ',
  'p', 'o', 'u', 'n', 'd', ' ',
  's', 't', 'e', 'a', 'l'];
let actual = 'steal pound cake';
reverseWords(input);
let expected = input.join('');
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
/*
# Tests

class Test(unittest.TestCase):

    def test_one_word(self):
        message = list('vault')
        reverse_words(message)
        expected = list('vault')
        self.assertEqual(message, expected)

    def test_two_words(self):
        message = list('thief cake')
        reverse_words(message)
        expected = list('cake thief')
        self.assertEqual(message, expected)

    def test_three_words(self):
        message = list('one another get')
        reverse_words(message)
        expected = list('get another one')
        self.assertEqual(message, expected)

    def test_multiple_words_same_length(self):
        message = list('rat the ate cat the')
        reverse_words(message)
        expected = list('the cat ate the rat')
        self.assertEqual(message, expected)

    def test_multiple_words_different_lengths(self):
        message = list('yummy is cake bundt chocolate')
        reverse_words(message)
        expected = list('chocolate bundt cake is yummy')
        self.assertEqual(message, expected)

    def test_empty_string(self):
        message = list('')
        reverse_words(message)
        expected = list('')
        self.assertEqual(message, expected)


unittest.main(verbosity=2) */