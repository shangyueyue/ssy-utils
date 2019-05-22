// // 归并排序
function merge(left, right) {
  const result = [];
  while (left[0] && right[0]) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
}
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const middleIndex = Math.floor(arr.length / 2);
  const left = arr.slice(0, middleIndex);
  const right = arr.slice(middleIndex);
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([8, 4, 3, 6, 2, 4, 2, 5, 3]));
