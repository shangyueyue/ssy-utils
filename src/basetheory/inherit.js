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
