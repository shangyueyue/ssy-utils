// 插入法排序
function insertSort(arr) {
  if (!Array.isArray(arr)) throw new Error('arr must be a Array');
  const $arr = [...arr];
  for (let i = 1; i < $arr.length; i++) {
    const temp = $arr[i];
    let j = i - 1;
    while (j >= 0 && temp < $arr[j]) {
      $arr[j + 1] = $arr[j];
      j--;
    }
  }
}
const arr = [6, 2, 8, 4, 3, 5, 3];
insertSort(arr);
