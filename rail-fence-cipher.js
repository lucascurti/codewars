// https://www.codewars.com/kata/rail-fence-cipher-encoding-and-decoding/train/javascript

function fillMatrix(string, numberRails) {
  // Matrix creation
  const matrix = new Array(numberRails);
  for (let i = 0; i < matrix.length; i += 1) {
    matrix[i] = new Array(string.length);
  }
  // Fill the matrix
  let direction = 1;
  let rail = 0;
  for (let i = 0; i < string.length; i += 1) {
    matrix[rail][i] = string[i];
    if (rail + direction === numberRails || rail + direction === -1) {
      direction *= -1;
    }
    rail += direction;
  }
  return matrix;
}

function encodeRailFenceCipher(string, numberRails) {
  if (string.length === 0) return string;

  const matrix = fillMatrix(string, numberRails);

  // Get the string
  return matrix.reduce((accum, r) => {
    return accum + r.join('');
  }, '');
}

function decodeRailFenceCipher(string, numberRails) {
  if (string.length === 0) return string;
  // Fill the matrix. At this point we only care on filling the
  // positions where a character should be present (the rest === undefined)
  const matrix = fillMatrix(string, numberRails);

  // iterate over each row. Shift the first character of the
  // string and insert it where !undefined
  let stringAsArray = string.split('');
  matrix.forEach((row, r) => {
    row.forEach((cell, c) => {
      if (cell) {
        matrix[r][c] = stringAsArray.shift();
      }
    });
  });
  // travel along the matrix to get the string
  let finalString = '';

  let direction = 1;
  let rail = 0;
  for (let i = 0; i < string.length; i += 1) {
    finalString += matrix[rail][i];
    if (rail + direction === numberRails || rail + direction === -1) {
      direction *= -1;
    }
    rail += direction;
  }

  return finalString;
}
