// https://www.codewars.com/kata/5877e7d568909e5ff90017e6/train/javascript

function isOrdered(array) {
  let increasingOrder = true;
  const end = array.length - 1;
  for (let i = 0; i < end; i += 1) {
    if (array[i] > array[i + 1]) {
      increasingOrder = false;
      break;
    }
  }
  return increasingOrder;
}

// QUE EL ARRAY VENGA COMO NUMERO!!!!!
function sumArray(array) {
  // console.log(array);
  return array.reduce((accum, current) => accum + current, 0);
}

function findEnd(n, k) {
  // console.log(n, k);
  let end;
  for (let index = 0; index < 10; index++) {
    let a = new Array(k + 1).join(index);
    a = a.split('').map(Number);
    if (sumArray(a) > n) {
      end = a;
      break;
    } else {
      end = a;
    }
  }
  return Number(end.join('')) + 1;
}

function findAll(n, k) {
  // console.log(n, k);
  let collect = [];
  const start = Math.pow(10, k - 1);
  const end = findEnd(n, k);
  // console.log(end);
  for (let i = start; i < end; i += 1) {
    let digits = i
      .toString()
      .split('')
      .map(Number);
    let sum = sumArray(digits);

    if (sum === n && isOrdered(digits)) {
      collect.push(digits.join(''));
    }
  }
  let final = [];
  final[0] = collect.length;
  final[1] = collect[0];
  final[2] = collect[collect.length - 1];
  return final[0] === 0 ? [] : final;
}

console.log(findAll(27, 3));
