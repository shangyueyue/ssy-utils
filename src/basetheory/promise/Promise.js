class Promise {
  constructor(task) {
    const resolve = value => {
      if (this.status === 'pendding') {
        this.status = 'fulfilled';
        this.reason = value;
      }
    };
    const reject = reason => {
      if (this.status === 'pendding') {
        this.status = 'rejected';
        this.reason = reason;
      }
    };
    this.status = 'pendding';
    this.value = undefined;
    this.reason = undefined;
    this.onFulFilledCallbacks = [];
    this.onRejectedCallbacks = [];
    try {
      task(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    if (onFulfilled) this.onFulFilledCallbacks.push(onFulfilled);
    if (onRejected) this.onRejectedCallbacks.push(onRejected);
  }
}

module.exports = Promise;
