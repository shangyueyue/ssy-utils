// 订阅发布模式
class EventEmitter {
  constructor() {
    this._events = {};
  }

  on(name, callback) {
    if (this._events[name]) {
      this._events[name].push(callback);
    } else {
      this._events[name] = [callback];
    }
  }

  emit(name) {
    if (this._events[name]) {
      this._events[name].forEach(cb => cb());
    }
  }

  remove(name, callback) {
    if (this._events[name]) {
      this._events[name] = this._events[name].filter(cb => cb !== callback);
    }
  }

  once(name, callback) {
    const fn = () => {
      callback();
      this.remove(name, fn);
    };
    this.on(name, fn);
  }
}

const event = new EventEmitter();

const func1 = () => {
  console.log('func1');
};
const func2 = () => {
  console.log('func2');
};
const func3 = () => {
  console.log('func3');
};
event.on('datas', func1);
event.on('datas', func2);
event.once('datas', func3);

event.emit('datas');
event.remove('datas', func1);
event.emit('datas');
