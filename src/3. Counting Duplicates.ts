//! [TITLE]
// Counting Duplicates

//! [DESCRIPTION]
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

//! [EXAMPLES]
// "abcde" -> 0  # no characters repeats more than once
// "aabbcde" -> 2  # 'a' and 'b'
// "aabBcde" -> 2  # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1  # 'i' occurs six times
// "Indivisibilities" -> 2  # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2  # 'a' and '1'
// "ABBA" -> 2  # 'A' and 'B' each occur twice

//! [SOLUTION]
function duplicateCount(text: string): number {
  const countLetter = new Map();
  const counter = 0;
  [...text.toLowerCase()].forEach((letter) => {
    return countLetter.has(letter)
      ? countLetter.set(letter, countLetter.get(letter) + 1)
      : countLetter.set(letter, 1);
  });
  return [...countLetter.entries()].filter(
    (val: [string, number]) => val[1] > 1
  ).length;
}

//! [CHECK]
console.log(duplicateCount('abcde'));
console.log(duplicateCount('aabbcde'));
console.log(duplicateCount('aabBcde'));
console.log(duplicateCount('indivisibility'));
console.log(duplicateCount('Indivisibilities'));
console.log(duplicateCount('aA11'));
console.log(duplicateCount('ABBA'));
