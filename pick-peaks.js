// https://www.codewars.com/kata/pick-peaks/train/javascript

function pickPeaks(array) {
  const pos = [];
  const peaks = [];
  // Find peaks where array[i] is higher array[i-1] and array[i+1]
  for (var i = 0; i < array.length - 2; i++) {
    let a3 = array.slice(i, i + 3);
    if (a3[1] > a3[0] && a3[1] > a3[2]) {
      pos.push(i + 1);
      peaks.push(a3[1]);
    }
    // Check plateus
    if (a3[1] > a3[0] && a3[1] === a3[2]) {
      let h = a3[2];
      let nextNums = array.slice(i + 3);
      let count = 0;
      while (nextNums.length) {
        let next = nextNums.shift();
        if (h < next) break;
        if (h > next && count >= 1) {
          pos.push(i + 1);
          peaks.push(a3[1]);
        }
        count += 1;
      }
    }
  }
  return { pos, peaks };
}

// [ 1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]

// Expected: '{ pos: [ 2, 7, 14, 20 ], peaks: [ 5, 6, 5, 5 ] }',
// instead got: '{ pos: [ 2, 7, 14, 20, 20 ], peaks: [ 5, 6, 5, 5, 5 ] }'

console.log(
  pickPeaks([
    1,
    2,
    5,
    4,
    3,
    2,
    3,
    6,
    4,
    1,
    2,
    3,
    3,
    4,
    5,
    3,
    2,
    1,
    2,
    3,
    5,
    5,
    4,
    3,
  ]),
);
