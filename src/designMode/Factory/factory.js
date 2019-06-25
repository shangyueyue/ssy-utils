class Animal {
  eat() {
    console.log(this.name);
  }
}
class Dog extends Animal {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.age = props.age;
  }
}
class Cat extends Animal {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.age = props.age;
  }
}
function SimpleFactory(type, ...args) {
  switch (type) {
    case 'dog':
      return new Dog(...args);
    case 'cat':
      return new Cat(...args);
    default:
      return null;
  }
}
const dog = SimpleFactory('dog', { name: 'dog', age: 12 });
dog.eat();

console.log('-------------------');
// 工厂方法

function Factory(type, ...args) {
  if (this instanceof Factory) {
    return new this[type](...args);
  } else {
    return new Factory(type, ...args);
  }
}
Factory.prrototype.Dog = function() {};
Factory.prrototype.Cat = function() {};
