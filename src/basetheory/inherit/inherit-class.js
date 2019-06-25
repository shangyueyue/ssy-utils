class Animal {
  static animalName = 'animalname';

  static anmimalrun() {
    console.log('animal run');
  }

  constructor(height, weight) {
    this.height = height;
    this.weight = this.weight;
  }

  info() {
    console.log(this.height, this.weight);
  }
}

class Dog extends Animal {
  constructor(name, age, height, weight) {
    super(height, weight);
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(this.name, this.age, 'Dog');
  }
}

const dog = new Dog('herry', 18);
console.log(dog.animalName);
