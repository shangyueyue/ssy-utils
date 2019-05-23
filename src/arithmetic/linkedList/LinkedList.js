class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head');
  }

  find(element) {
    let currentNode = this.head;
    while (currentNode && currentNode.element) {
      if (currentNode.element === element) {
        return currentNode;
      } else {
        currentNode = currentNode.next;
      }
    }
    return null;
  }

  insert(element, newElement) {
    const currentNode = this.find(element);
    if (!currentNode) {
      throw new Error('未查找到元素');
    }
    const insertNode = new Node(newElement);
    insertNode.next = currentNode.next;
    currentNode.next = insertNode;
  }

  findPre(element) {
    let preNode = this.head;
    while (preNode.next && preNode.next.element !== element) {
      preNode = preNode.next;
    }
    if (!preNode.next) {
      throw new Error('没有找到要删除的节点');
    }
    return preNode;
  }

  remove(element) {
    const preNode = this.findPre(element);
    preNode.next = preNode.next.next;
  }

  display() {
    let currentNode = this.head;
    const result = [];
    do {
      result.push(currentNode.element);
      currentNode = currentNode.next;
    } while (currentNode);
    return result.toString();
  }
}

const list = new LinkedList();
list.insert('head', 'second');
list.insert('second', 'third');
list.insert('second', 'four');
console.log(list.display());
list.remove('second');

console.log(list.display());
