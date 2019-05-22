class Stack {
  constructor() {
    this.store = [];
    this.top = 0;
  }

  push(item) {
    this.store[this.top++] = item;
    return this.store;
  }

  pop() {
    return this.store[--this.top];
  }

  peek() {
    return this.store[this.top - 1];
  }

  size() {
    return this.top;
  }

  claer() {
    this.store = [];
    this.top = 0;
  }
}

const stack = new Stack();

stack.push('shang');
stack.push('yy');
console.log(stack.push('big'));
console.log(stack.peek());
console.log(stack.size());
