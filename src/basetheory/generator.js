// 迭代器
// function read(books) {
//   let index = 0;
//   return {
//     next() {
//       const done = index === books.length;
//       const value = done ? undefined : books[index++]; // eslint-disable-line
//       return {
//         value,
//         done,
//       };
//     },
//   };
// }

// const it = read(['nodejs', 'css', 'js']);
// let result;
// do {
//   result = it.next();
//   console.log(result);
// } while (!result.done);

// generator
function* func(subjects) {
  let result;
  for (const item of subjects) {
    result = yield item;
    console.log(result);
  }
}
const subjects = ['js', 'html5', 'css'];
const iterater = func(subjects);
console.log(iterater.next());
console.log(iterater.next(9));
console.log(iterater.next(0));

// function* helloWorldGenerator() {
//   yield 'hello';
//   yield 2 + 3;
//   return 'ending';
// }

// const hw = helloWorldGenerator();
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());

function* flat(arr) {
  for (const item of arr) {
    if (Array.isArray(item)) {
      yield* flat(item);
    } else {
      yield item;
    }
  }
}
const arr = [1, [[2, 3], 4], [5, 6]];
const iterator = flat(arr);
let result;
do {
  result = iterator.next();
  console.log(result);
} while (!result.done);

// function* arrGenerator() {
//   for (let i = 0; i < this.length; i++) {
//     yield this[i] + 5;
//   }
// }
// const arr = [1, 3, 4, 5];
// arr[Symbol.iterator] = arrGenerator;
// // const iterator = arrGenerator(arr);
// for (const item of arr) {
//   console.log(item);
// }

// 实现对象的 for of

// function* objGenerator() {
//   for (const item of Object.keys(this)) {
//     const key = item;
//     const value = this[item];
//     yield [key, value];
//   }
// }

// const obj = {
//   name: 'shangyueyue',
//   age: 18,
// };
// obj[Symbol.iterator] = objGenerator;
// for (const [key, value] of obj) {
//   console.log(key, value);
// }

// function* main() {
//   const result = yield request('http://some.url');
//   const resp = JSON.parse(result);
//   console.log(resp.value);
// }

// function request(url) {
//   makeAjaxCall(url, function(response) {
//     it.next(response);
//   });
// }
// var it = main();
// it.next();
