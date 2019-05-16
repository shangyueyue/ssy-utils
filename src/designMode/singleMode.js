// 单例模式
class SingleMode {
  static getInstance(name, age) {
    if (!SingleMode.instance) {
      SingleMode.instance = new SingleMode(name, age);
    }
    return SingleMode.instance;
  }

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  setInfo(name, age) {
    this.name = name;
    this.age = age;
    console.log(this.name, this.age);
  }
}

const s1 = SingleMode.getInstance('shangyueyue', 18);
const s2 = SingleMode.getInstance('shangyueyue', 18);
console.log(s1, s2, s1 === s2);
// SingleMode { name: 'shangyueyue', age: 18 } SingleMode { name: 'shangyueyue', age: 18 } true
s2.setInfo('huyating', 23);
console.log(s1, s2, s1 === s2);
// SingleMode { name: 'huyating', age: 23 } SingleMode { name: 'huyating', age: 23 } true

// 单例模式
class SingleMode2 {
  constructor(name, age) {
    if (SingleMode2.instance) return SingleMode2.instance;
    this.name = name;
    this.age = age;
    SingleMode2.instance = this;
    return this;
  }

  setInfo(name, age) {
    this.name = name;
    this.age = age;
    console.log(this.name, this.age);
  }
}
const s3 = new SingleMode2('shangyueyue', 18);
const s4 = new SingleMode2('shangyueyue', 18);
console.log(s3, s4, s3 === s4);
// SingleMode { name: 'shangyueyue', age: 18 } SingleMode { name: 'shangyueyue', age: 18 } true
s3.setInfo('huyating', 23);
console.log(s3, s4, s3 === s4);
// SingleMode { name: 'huyating', age: 23 } SingleMode { name: 'huyating', age: 23 } true
