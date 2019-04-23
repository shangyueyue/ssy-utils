function curry(fn, ...args) {
  const len = fn.length;
  return function(...vargs) {
    const newArgs = [...args, ...vargs];
    if (len > newArgs.length) {
      return curry.call(this, fn, ...newArgs);
    } else {
      return fn.call(this, ...newArgs);
    }
  };
}

function addFn(a, b, c, d) {
  return a + b + c + d;
}

const add = curry(addFn);
console.log(add(1, 2)(2)(3));
