//https://www.codewars.com/kata/52e864d1ffb6ac25db00017f/train/javascript

function toPostfix(infix) {
  const stack = [];
  let postfix = '';
  const infixArray = infix.split('');
  const precedence = {
    '^': 15,
    '/': 14,
    '*': 14,
    '+': 13,
    '-': 13,
    ')': 1,
    '(': 1
  };

  infixArray.forEach((char, i) => {
    // console.log(`stack ${i}:`, stack);
    // console.log(`postfix ${i}:`, postfix);
    if (char.match(/[0-9]/gi)) {
      postfix += char;
    } else if (char === '(') {
      stack.push(char);
    } else {
      let lastInStack = stack[stack.length - 1];
      // console.log(`last in stack ${i}:`, lastInStack);
      // if the precedence is higher than the last operator
      // of the stack => push it to the stack unless it's a
      // closing parenthesis. In this case, pop the stack until
      // the opening parenthesis is found.
      if (!lastInStack) {
        stack.push(char);
      } else {
        if (precedence[char] > precedence[lastInStack]) {
          if (char === ')') {
            lastInStack = stack.pop();
            while (lastInStack !== '(') {
              postfix += lastInStack;
            }
          } else {
            stack.push(char);
          }
          // if precedence is not higher pop the stack
        } else {
          lastInStack = stack[stack.length - 1];
          let keepGoing = true;
          while (keepGoing) {
            if (precedence[lastInStack] >= precedence[char]) {
              postfix += lastInStack;
              stack.pop();
              if (stack.length) {
                lastInStack = stack[stack.length - 1];
              } else {
                keepGoing = false;
                stack.push(char);
              }
            } else {
              keepGoing = false;
              stack.push(char);
            }
          }
        }
      }
    }
  });
  while (stack.length) {
    postfix += stack.pop();
  }
  return postfix.replace(/[\(|\)]/gi, '');
}

console.log(toPostfix('2+7*5'));
console.log(toPostfix('3*3/(7+1)'));
console.log(toPostfix('5+(6-2)*9+3^(7-1)'));
console.log(toPostfix('(5-4-1)+9/5/2-7/1/7'));
