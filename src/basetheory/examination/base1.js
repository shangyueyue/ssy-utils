// 局部
function sayHi() {
  let x;
  let y;
  try {
    throw new Error();
  } catch (x) {
    x = 1;
    y = 1;
    console.log(x); // 1
  }
  console.log(x); // unfined
  console.log(y); // 1
}
sayHi();

// object
const aObj = { a: 1 };
const bObj = { b: 1 };
const c = {};
c[aObj] = 123;
c[bObj] = 235; // toString [object Object]
console.log(c[aObj]); // 235

const obj1 = { a: 'shang', b: 'yy', a: 'huyating' };
console.log(obj1);
const obj2 = { name: 'shangyy', age: 18 };
const obj3 = { name: 'huyating' };
console.log({ ...obj2, ...obj3 });
