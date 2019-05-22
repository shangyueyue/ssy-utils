// demo 1
const arr1 = [...new Array(7).fill(1)];
console.log(arr1);
const arr2 = [...new Array(5).keys()];
console.log(arr2);
const days = [...new Array(7).keys()].map(d => new Date(Date.now() - 24 * 60 * 60 * 1000 * d));
console.log(days);

// demo2 随机打散数组
const arr3 = [...new Array(5).keys()];

arr3.sort(() => {
  return Math.random() - 0.5;
});
console.log(arr3);

// 随机生成颜色
const rcolor = Math.floor(Math.random() * 0xffffff)
  .toString(16)
  .padEnd(6, '0');
const color = `#${rcolor}`;
console.log(color);
