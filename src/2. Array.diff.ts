//! [TITLE]
// Array.diff

//! [DESCRIPTION]
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// If a value is present in b, all of its occurrences must be removed from the other.

//! [EXAMPLES]
// arrayDiff([1,2],[1]) == [2]
// arrayDiff([1,2,2,2,3],[2]) == [1,3]
// arrayDiff([],[2]) == []
// arrayDiff([1,5,3],[]) == [1, 5, 3]
// arrayDiff([],[]) == []

//! [SOLUTION]
function arrayDiff(a: Array<number>, b: Array<number>) {
  if (!(a.length && b.length)) return a;
  return a.filter((elemOfA: number) => !b.includes(elemOfA));
  //* [V1]
  // return a.filter(
  //   (elemOfA: number) => !b.find((elemOfB: number) => elemOfA === elemOfB)
  // );
}

//! [CHECK]
console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
console.log(arrayDiff([1, 2, 3], [1, 2]));
console.log(arrayDiff([], [2]));
console.log(arrayDiff([1, 5, 3], []));
console.log(arrayDiff([], []));
