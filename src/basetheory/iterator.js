// const arr = new Array(8);
// arr[0] = 1;
// arr[3] = 3;
// arr[4] = 4;
// arr[5] = null;
// arr[6] = undefined;

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(i, arr[i]);
// }
// console.log('in_____________');

// for (const index in arr) {
//   if (Object.prototype.hasOwnProperty.call(arr, index)) {
//     console.log(index, arr[index]);
//   }
// }

// console.log('of_____________');

// for (const item of arr) {
//   console.log(item);
// }

// console.log('each_____________');

// arr.forEach(item => {
//   console.log(item);
// });

// function func(fn, wait, times) {
//   let index = 0;
//   let timer = null;
//   return (function fun() {
//     if (index >= times) {
//       clearTimeout(timer);
//       timer = null;
//       console.log(timer);
//       return;
//     }
//     timer = setTimeout(() => {
//       fn();
//       index += 1;
//       fun();
//     }, wait);
//   })();
// }
// 每隔 秒钟循环一次
function func(fn, wait, times) {
  dispatch(0);
  function dispatch(index) {
    if (index >= times) return;
    setTimeout(() => {
      fn();
      index += 1;
      dispatch(index);
    }, wait);
  }
}
func(
  () => {
    console.log('100');
  },
  1000,
  5
);

function flatfn(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatfn(cur) : cur);
  }, []);
}
const arr = [1, [2, [4, 6, [6], [1, 2]]]];
console.log(flatfn(arr));
