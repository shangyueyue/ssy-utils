// 实现 instanceof

function instance(a, b) {
  const proto = a.__proto__; // eslint-disable-line
  if (proto) {
    if (proto === b.prototype) {
      return true;
    } else {
      return instance(proto, b);
    }
  } else {
    return false;
  }
}

class Base {}

class A extends Base {}
class B extends Base {}
const a = new A();

console.log(a instanceof Base);
console.log(instance(a, B));
