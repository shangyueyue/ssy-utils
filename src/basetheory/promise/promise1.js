class MyPromise {
  constructor(task) {
    this.status = 'pendding';
    this.value = undefined;
    this.reason = undefined;
    const resolve = value => {
      if (this.status === 'pendding') {
        this.status = 'fulfilled';
        this.value = value;
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
    if (this.status === 'fulfilled') {
      onFulFilled(this.value);
    }
    if (this.status === 'rejected') {
      onRejected(this.reason);
    }
  }
}
// 测试一下

const p = new MyPromise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve('success');
  } else {
    reject('failed');
  }
});
p.then(
  data => {
    console.log('resolve', data);
  },
  reason => {
    console.log('reject', reason);
  }
);
