class Car {
  constructor(number, name) {
    this.number = number;
    this.name = name;
  }
}

class SlowCar extends Car {
  constructor(number, name) {
    super(number, name);
    this.price = 1;
  }
}

class FastCar extends Car {
  constructor(number, name) {
    super(number, name);
    this.price = 2;
  }
}

class Trip {
  constructor(car) {
    this.car = car;
  }

  carStart() {
    console.log(this.car.number, this.car.name, this.car.price);
  }

  carStop(len) {
    console.log(this.car.price * len);
  }
}

const slowCar = new SlowCar('13631605162', '桑塔纳');
const faseCar = new FastCar('14231605162', '宝马'); // eslint-disable-line
const trip = new Trip(slowCar);

trip.carStart();
trip.carStop(10);
