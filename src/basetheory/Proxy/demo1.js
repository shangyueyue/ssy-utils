const person = {
  name: 'jesse',
  age: 25,
};
const proxy = new Proxy(person, {
  get(target, propKey) {
    return target[propKey];
  },
  set(obj, prop, value) {
    // if (value >= 30) {
    //   throw new Error('invalid');
    // }
    obj[prop] = value;
  },
});
console.log(proxy.name); // get jesse
proxy.age = 30; // Uncaught Error: invalid
