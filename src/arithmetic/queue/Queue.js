class Queue {
  constructor() {
    this.store = [];
  }

  enqueue(item) {
    this.store.push(item);
  }

  dequeue() {
    this.store.shift();
  }

  isEmpty() {
    return this.store.length === 0;
  }

  front() {
    return this.store[0];
  }

  size() {
    return this.store.length;
  }

  print() {
    return this.store.toString();
  }
}

const queue = new Queue();
queue.enqueue('1');
queue.enqueue('3');
queue.enqueue('2');
queue.dequeue();
console.log(queue.print());
