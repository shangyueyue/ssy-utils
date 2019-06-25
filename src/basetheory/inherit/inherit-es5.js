function Parent(name) {
  this.name = name;
}
Parent.prototype.sayName = function sayName() {
  console.log(`parent name: ${this.name}`);
};

function create(proto) {
  function Fn() {}
  Fn.prototype = proto;
  return new Fn();
}

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}
Child.prototype = create(Parent.prototype);
Child.prototype.sayName = function sayName() {
  console.log(`child name: ${this.name}`);
};

Child.prototype.contructor = Child;

const child = new Child('shangyy', 25);

child.sayName();
console.log('----------------------------------------------');

function Animal(height, weight) {
  this.height = height;
  this.weight = weight;
}
Animal.prototype.info = function() {
  console.log('animal', this.height, this.weight);
};

function Dog(name, age) {
  Animal.call(this);
  this.name = name;
  this.age = age;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.eat = function(food) {
  console.log(this.name, 'eat', food);
};

const dog = new Dog('herry', 12);
console.log(dog);
/*
Dog {height: undefined, weight: undefined, name: "herry", age: 12}
age: 12
height: undefined
name: "herry"
weight: undefined
__proto__: Animal
constructor: ƒ Dog(name, age)
eat: ƒ (food)
__proto__: Object
*/
