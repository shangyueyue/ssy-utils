function cStairs(n) {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return cStairs(n - 1) + cStairs(n - 2);
  }
}
console.time('time1');
console.log(cStairs(10));
console.timeEnd('time1');

const climbStairs = function(n) {
  let a = 1;
  let b = 1;
  for (let i = 2; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
};
console.time('time2');
console.log(climbStairs(100));
console.timeEnd('time2');
