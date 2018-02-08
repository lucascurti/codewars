// https://www.codewars.com/kata/counting-change-combinations/train/javascript

function sumArray(array) {
  return array.reduce((acum, current) => acum + current, 0);
}

function countChange(sum, arr, count) {
    if (arr)
}

// function reduce(sum, arr, num) {
//   if (sum === 0) return num + 1;
//   if (sum < 0 || !arr.length) return num;

//   return reduce(sum - arr[0], arr, num) + reduce(sum, arr.slice(1), num);
// }

// function countChange(sum, arr) {
//   if (sum <= 0 || !arr.length) return 0;

//   return reduce(sum, arr, 0);
// }



// var countChange = function(money, coins) {
//   let helperArray = [coins[0]];
//   let helperCoins = coins.slice();
//   let n = helperCoins.shift();
//   let count = 0;
//   let keepGoing = true;

//   while (helperCoins[0] !== 'stop') {
//     console.log(helperArray);
//     console.log('helpercoins:', helperCoins);
//     if (sumArray(helperArray) >= money) {
//       if (sumArray(helperArray) === money) {
//         count += 1;
//         console.log(count);
//         helperArray.pop();
//         helperArray.pop();
//       }
//       let nextCoin = helperCoins.shift();
//       if (!nextCoin) {
//         helperCoins[0] = 'last';
//         helperArray.push(nextCoin);
//       } else {
//         helperArray.push(nextCoin);
//       }
//       if (nextCoin === 'last') helperCoins[0] = 'stop';
//     } else {
//       helperArray.push(n);
//     }
//   }
//   return count;
// };

console.log(countChange(4, [1, 2]));
console.log(countChange(10, [5, 2, 3]));
console.log(countChange(11, [5, 7]));
