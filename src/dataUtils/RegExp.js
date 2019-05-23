// demo1 判断小数位数最多2位
console.log(/^\d+([.]\d{1,2})?$/.test(11.11));

// demo2 url search queryParse
const search = '?name=shangyy&age=18';
const obj = {};
const reg2 = /([^?&=]+)=([^&=]+)/g;
search.replace(reg2, (_, key, val) => {
  obj[key] = val;
});
console.log(obj);

// demo3 匹配重复的
const reg3 = /(\w+)\1+/;
const str3 = 'abcabcabcf';
console.log(str3.match(reg3)); // [ 'abcabcabc', 'abc', index: 0, input: 'abcabcabcf' ]
