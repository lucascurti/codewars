// https://www.codewars.com/kata/5877e7d568909e5ff90017e6/train/javascript

function findAll(n, k) {
  let collect = [];
  const start = Math.pow(10, k - 1); // for k = 3 => start = 100
  const end = Math.pow(10, k) - 1; // for k = 3 => end = 999

  let temporaryStart = start;

  while (temporaryStart <= end) {
    let breakForLoop = false;
    for (let i = temporaryStart; i <= end; i += 1) {
      const numberString = i.toString();
      // Sum all the digits of the number
      let sum = 0;
      for (let j = 0; j < k; j += 1) {
        const x = +numberString[j];
        const y = +numberString[j + 1];
        // if a digit is smaller than the previous digit,
        // set the new start and break the current loop
        if (y < x) {
          temporaryStart = +(
            numberString.slice(0, j + 1) + new Array(k - j).join(x)
          );
          breakForLoop = true; // breaks the parent For Loop
          break;
        }
        sum += x;
      }
      if (breakForLoop) break;
      // if the sum of all the digits = n, push it to the collection
      if (sum === n) {
        collect.push(numberString);
      }
      // If condition to break the While Loop
      if (temporaryStart === end) temporaryStart += 1;
    }
  }

  const final = [];
  final[0] = collect.length;
  final[1] = collect[0];
  final[2] = collect[collect.length - 1];
  return final[0] === 0 ? [] : final;
}

console.log(findAll(10, 3));
console.log(findAll(27, 3));
console.log(findAll(84, 4));
console.log(findAll(35, 6));
