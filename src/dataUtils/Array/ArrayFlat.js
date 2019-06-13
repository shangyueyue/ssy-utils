// 数组拉平 es6 flat
// const arr = [1, [2, 3], [4, [5, 6, [8]], 7]];
// // console.log(arr.flat());
// console.log(arr.flat(2));
// console.log(arr.flat(3));
// [1, [2, [3]]].flat(Infinity);

function arrayFlat(arr) {
  return arr.reduce((pre, cur) => {
    const temp = Array.isArray(cur) ? arrayFlat(cur) : cur;
    return pre.concat(temp);
  }, []);
}
const result = arrayFlat([1, [2, 3], [4, [5, 6, [8]], 7]]);
console.log(result);

function myFlat(arr, deep = 2) {
  if (deep === 0) return arr;
  return arr.reduce((pre, cur) => {
    const temp = Array.isArray(cur) ? myFlat(cur, deep - 1) : cur;
    return pre.concat(temp);
  }, []);
}

console.log(myFlat([1, [2, 3], [4, [5, 6, [8]], 7]]));
console.log(myFlat([1, [2, 3], [4, [5, 6, [8]], 7]], Infinity));
