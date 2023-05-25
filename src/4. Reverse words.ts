//! [TITLE]
// Reverse words

//! [DESCRIPTION]
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//! [EXAMPLES]
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//! [SOLUTION]
function reverseWords(str: string): string {
  return str
    .split(/(\s+)/g)
    .map((word: string): string => word.split('').reverse().join(''))
    .join('');
}

//! [CHECK]
console.log(reverseWords('This is an example!'));
console.log(reverseWords('double  spaces'));
