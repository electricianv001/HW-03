
function calculate(a, b, operator) {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b === 0 ? NaN : a / b;
    default:  return NaN;
  }
}

const ctx = { a: 2, b: 3, operator: '+' };


const result = calculate.apply(ctx, [2, 3, '+']);
console.log(result); 

