function compose(...funcs) {
  if (funcs.length === 0) return args => args;
  if (funcs.length === 1) return funcs[0];
  return funcs.reduce((a, b) => (...args) => b(a(...args)));
}

const arrPush = arr => {
  arr.push(4);
  return arr;
};
const arrReverse = arr => {
  return arr.reverse();
};

const add = arr => {
  return arr.reduce((a, b) => a + b);
};

const composeFn = compose(
  arrPush,
  arrReverse,
  add
);
const result = composeFn([1, 2, 3]);
console.log(result);
