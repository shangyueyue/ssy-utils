class Flower {
  constructor(price) {
    this.price = price;
  }
}

const boy = {
  name: 'jack',
  flower: new Flower(120),
  send(person) {
    person.receive(this.flower);
  },
};
const proxyer = {
  name: 'proxyer',
  receive(flower) {
    if (flower.price > 100) {
      girl.receive(flower);
    }
  },
};
const girl = {
  name: 'alice',
  receive(flower) {
    console.log(this.name, flower.price);
  },
};
boy.send(proxyer);
