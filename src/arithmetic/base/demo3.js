const str = 'shangyy';
console.log(str.slice(-1), str);

console.log(str.substr(-1), str);
console.log(str.substring(1, 2), str);

console.log('----------');

const arr = [1, 2, 3, 4, 5];
console.log(arr.splice(1, 3, 1, 2), arr);
console.log(arr.splice(-1), arr);

Function.prototype.myApply = function() {};
