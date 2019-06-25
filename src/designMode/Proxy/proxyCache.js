const mult = (...args) => {
  return args.reduce((pre, cur) => pre * cur);
};

const proxy = (function() {
  const cache = {};
  return (...args) => {
    const key = args.join(',');
    return cache[key] || (cache[key] = mult(...args));
  };
})();
