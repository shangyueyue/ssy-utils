// 随机生成 2， 32之间的不重复的数据数
function createArr(n, max, min) {
  const result = [];
  while (result.length <= n) {
    const temp = Math.floor(Math.random() * (max - min + 1) + min);
    if (result.indexOf(temp) === -1) result.push(temp);
  }
  return result;
}

console.log(createArr(5, 32, 2));
