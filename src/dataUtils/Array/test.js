const arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];
const arr2 = ['A', 'B', 'C', 'D'];

function deal(left, right) {
  let result = [];
  let index = 0;
  while (index < right.length) {
    result = result.concat(left.slice(2 * index, 2 * (index + 1)), right.slice(index, index + 1));
    index++;
  }
  return result;
}
console.log(deal(arr1, arr2));
