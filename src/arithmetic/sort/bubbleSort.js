// 冒泡排序
function bubbleSort(arr) {
  const _arr = [...arr];
  for (let i = 1; i < _arr.length - 1; i++) {
    for (let j = 0; j < _arr.length - i; j++) {
      if (_arr[j] > _arr[j + 1]) {
        [_arr[j + 1], _arr[j]] = [_arr[j], _arr[j + 1]];
      }
    }
  }
  return _arr;
}

const arr = [6, 2, 8, 4, 3, 5, 3];
console.log(bubbleSort(arr));
