//! [TITLE]
// Stop gninnipS My sdroW!

//! [DESCRIPTION]
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

//! [EXAMPLES]
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

//! [SOLUTION]
export function spinWords(words: string): string {
  return words
    .split(' ')
    .map((word: string) => {
      return word.length < 5 ? word : word.split('').reverse().join('');
    })
    .join(' ');
}

//! [CHECK]
console.log(spinWords('Hey fellow warriors'));
console.log(spinWords('This is a test'));
console.log(spinWords('This is another test'));
