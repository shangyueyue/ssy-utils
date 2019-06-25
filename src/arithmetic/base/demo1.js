const arr = [1, 2, 3, 4, 5, 6];
const k = 3;
const arr1 = arr.splice(-k);
console.log(arr1);
console.log(arr1.concat(arr));
console.log('________________________');

function func2(arr2) {
  const _arr = [...arr2];
  let j = 0;
  for (let i = 0; i < _arr.length - j; i++) {
    if (_arr[i] === 0) {
      _arr.splice(i, 1);
      _arr.push(0);
      i--;
      j++;
    }
  }
  return _arr;
}

const arr2 = [1, 0, 2, 0, 4];
console.log(func2(arr2));
