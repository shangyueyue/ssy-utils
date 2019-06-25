function Person(name, age) {
  this.name = name;
  this.age = age;
  return {};
}
function _new(fn, ...args) {
  const obj = Object.create(fn.prototype);
  const result = fn.call(obj, ...args);
  return result instanceof Object ? result : obj;
}

const person = _new(Person, 'shangyy', 21);
console.log(person);
