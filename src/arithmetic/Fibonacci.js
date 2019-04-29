// feibonaqi 斐波那契数列
function Fibonacci(n) {
  let [a, b] = [0, 1];
  for (let i = 0; i < n; i += 1) {
    [a, b] = [b, a + b];
  }
  return b;
}
// 1, 1, 2, 3, 5, 8
console.log(Fibonacci(10));

function Fibonacci2(n) {
  return new Array(n).fill().reduce(([a, b]) => [b, a + b], [0, 1])[1];
}
console.log(Fibonacci2(10));

// 阶乘
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));
