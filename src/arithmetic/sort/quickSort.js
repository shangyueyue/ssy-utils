// 快速排序

function quickSort(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('param must be Array');
  }
  if (arr.length <= 1) return arr;
  const middleIndex = Math.floor(arr.length / 2);
  const middleArr = arr.splice(middleIndex, 1);
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < arr.length; i++) { // eslint-disable-line
    if (arr[i] <= middleArr[0]) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return [...quickSort(leftArr), ...middleArr, ...quickSort(rightArr)];
}

const result = quickSort([2, 1, 4, 2, 5, 3]);
console.log(result);
