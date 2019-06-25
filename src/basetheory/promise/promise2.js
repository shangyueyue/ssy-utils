class MyPromise {
  constructor(task) {
    this.status = 'pendding';
    this.value = undefined;
    this.reason = undefined;
    this.fulfilledCallbacks = [];
    this.rejectCallbacks = [];
    const resolve = value => {
      if (this.status === 'pendding') {
        this.status = 'fulfilled';
        this.value = value;
        this.fulfilledCallbacks.forEach(fn => {
          fn();
        });
      }
    };
    const reject = reason => {
      if (this.status === 'pendding') {
        this.status = 'rejected';
        this.reason = reason;
      }
    };
    try {
      task(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulFilled, onRejected) {
    if (this.status === 'fulfilled' && onFulFilled) {
      onFulFilled(this.value);
    }
    if (this.status === 'rejected' && onRejected) {
      onRejected(this.reason);
    }
    if (this.status === 'pendding' && onFulFilled) {
      this.fulfilledCallbacks.push(() => {
        onFulFilled(this.value);
      });
    }
    if (this.status === 'pendding' && onRejected) {
      this.rejectCallbacks.push(() => {
        onRejected(this.reason);
      });
    }
  }
}
// 测试一下

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('my data');
  }, 100);
});
p.then(
  data => {
    console.log('resolve', data);
  },
  reason => {
    console.log('reject', reason);
  }
);
