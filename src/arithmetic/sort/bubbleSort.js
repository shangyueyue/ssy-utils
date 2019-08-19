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

function sort() {
  const $arr = [5, 3, 2, 4, 6, 2];
  for (let i = 0; i < $arr.length; i++) {
    const temp = $arr[i];
    let j = i - 1;
    while (j >= 0 && temp < $arr[j]) {
      $arr[j + 1] = $arr[j];
      j--;
    }
    $arr[j + 1] = temp;
  }
  console.log($arr);
}
console.log(sort());
