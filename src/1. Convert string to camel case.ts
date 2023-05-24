//! [TITLE]
// Convert string to camel case

//! [DESCRIPTION]
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

//! [EXAMPLES]
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

//! [SOLUTION]
function toCamelCase(str: string): string {
  return str
    .split(/[-_]/)
    .map((word: string, index: number) =>
      index ? `${word[0].toUpperCase()}${word.slice(1)}` : word
    )
    .join('');
}

//! [CHECK]
console.log(toCamelCase('the-stealth-warrior'));
console.log(toCamelCase('The_Stealth_Warrior'));
console.log(toCamelCase('The_Stealth-Warrior'));
