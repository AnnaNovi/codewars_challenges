//! [TITLE]
// Detect Pangram

//! [DESCRIPTION]
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//! [EXAMPLES]
// The quick brown fox jumps over the lazy dog. => true
// This is not a pangram. => false

//! [SOLUTION]
const isPangram = (phrase: string): boolean => {
  const letters = phrase.toLowerCase().match(/[a-z]/g);
  return new Set(letters).size === 26;
};

//! [CHECK]
console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
console.log(isPangram('This is not a pangram.'));
console.log(isPangram('8pyrzFO2qeG6i3LHey0rruVjOGZe31s6aVwAepfgJPWOFv'));
console.log(isPangram('zgkHVIdFLhhK3MajoEHQhsKPtEwOUD'));
console.log(isPangram('2N9Kwz19XRXqJREC5YpAhWD'));
console.log(isPangram('UysgeeD2muaga7vLNx4Gk4V5oHW2I623Tvn78eL8Xoyp'));
