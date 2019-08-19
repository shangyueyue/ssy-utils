function Flat(arr, n = 1) {
  if (n <= 0) return arr;
  return arr.reduce((pre, cur) => {
    const temp = Array.isArray(cur) ? Flat(cur, n--) : cur;
    return pre.concat(temp);
  }, []);
}
const result = Flat([1, [2, 3], 5, [4, [16]]], 3);
console.log(result);
