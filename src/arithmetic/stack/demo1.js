// 进制转换 10进制转换成其他进制

function dataconverse(data, base) {
  const stack = [];
  let num = data;
  do {
    stack.push(num % base);
    num = Math.floor(num / base);
  } while (num > 0);
  return stack.reduceRight((per, cur) => {
    return per + cur;
  }, '');
}
const result = dataconverse(125, 8);
console.log(result);

// 判断是回文
function isPalindrome(word) {
  const stack = [];
  for (let i = 0; i < word.length; i++) {
    stack.push(word[i]);
  }
  return stack.join('') === word;
}

console.log(isPalindrome('1001'));
function isPalindrome1(word) {
  return (
    word
      .split('')
      .reverse()
      .join('') === word
  );
}
console.log(isPalindrome1('110011'));
