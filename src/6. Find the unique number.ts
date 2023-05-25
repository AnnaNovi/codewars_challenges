//! [TITLE]
// Find the unique number

//! [DESCRIPTION]
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.

//! [EXAMPLES]
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

//! [SOLUTION]
function findUniq(arr: number[]): number {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === arr[index + 1]) continue;
    return !index && arr[index + 1] === arr[index + 2]
      ? arr[index]
      : arr[index + 1];
  }
  return arr[0];
}

//! [CHECK]
console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
console.log(findUniq([0, 1, 1, 1, 1]));

// Можно решить с помощью sort, но менее оптимизированно
function findUniqSort(arr: number[]): number {
  const sortedArr = arr.sort();
  return sortedArr[0] === sortedArr[1]
    ? sortedArr[sortedArr.length - 1]
    : sortedArr[0];
}

var start = performance.now();
findUniq([1, 1, 1, 2, 1, 1]);
findUniq([0, 0, 0.55, 0, 0]);
findUniq([0, 1, 1, 1, 1]);
const durationFindUniq = performance.now() - start;

var start = performance.now();
findUniqSort([1, 1, 1, 2, 1, 1]);
findUniqSort([0, 0, 0.55, 0, 0]);
findUniqSort([0, 1, 1, 1, 1]);
const durationFindUniqSort = performance.now() - start;

console.log(
  `More optomized: ${
    durationFindUniqSort > durationFindUniq ? 'findUniq' : 'findUniqSort'
  }; 
  difference: ${Math.abs(durationFindUniqSort - durationFindUniq).toFixed(5)}`
);
