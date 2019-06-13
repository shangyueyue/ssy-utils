// 方法1
function ArrayBreak1(arr) {
  const $arr = [...arr];
  return $arr.sort(() => Math.random() - 0.5);
}

console.log(ArrayBreak1([1, 2, 3, 4, 5, 6]));

// 方法2
function ArrayBreak2(arr) {
  const $arr = [...arr];
  const result = [];
  while ($arr.length) {
    const index = Math.floor(Math.random() * $arr.length);
    result.push($arr[index]);
    $arr.splice(index, 1);
  }
  return result;
}

console.log(ArrayBreak2([1, 2, 3, 4, 5, 6]));
