//! [TITLE]
// Isograms

//! [DESCRIPTION]
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

//! [EXAMPLES]
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

//! [SOLUTION]
export function isIsogram(str: string): boolean {
  const uniqueLetters = new Set(str.toLowerCase());
  return str.length === uniqueLetters.size;
}

//! [CHECK]
console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));
