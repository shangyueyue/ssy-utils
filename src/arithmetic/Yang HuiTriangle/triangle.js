// 杨辉三角
function triangleFn(n) {
  if (typeof n !== 'number' || n < 1) return;
  console.log(1);
  if (n === 1) return;
  dispatch(2, [1, 1]);
  function dispatch(index, current) {
    if (index > n) return;
    console.log(current.join(' '));
    const next = [1];
    for (let i = 1; i < current.length; i++) {
      next[i] = current[i - 1] + current[i];
    }
    next.push(1);
    dispatch(index + 1, next);
  }
}

triangleFn(1);
console.log('________________');
triangleFn(2);
console.log('________________');
triangleFn(3);
console.log('________________');
triangleFn(4);
console.log('________________');
triangleFn(20);
