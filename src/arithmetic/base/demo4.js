const person = {
  name: '张三',
  age: 18,
};

const proxy = new Proxy(person, {
  get(target, property) {
    if (property in target) {
      console.log(target, property);
      return target[property];
    } else {
      throw new ReferenceError(`Property "${property}" does not exist.`);
    }
  },
  set(target, property, value) {
    console.log(target, property, value);
    target[property] = value;
  },
});

proxy.name; // "张三"
proxy.age += 1;
proxy.age;
