class Node {
  constructor(element) {
    this.element = element;
    this.prev = null;
    this.next = null;
  }
}

class DulinkedList {
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
    const insertNode = new Node(newElement);
    insertNode.prev = currentNode;
    if (currentNode.next) {
      insertNode.next = currentNode.next;
      currentNode.next.prev = insertNode;
    }
    currentNode.next = insertNode;
  }

  remove(element) {
    const currentNode = this.find(element);
    if (!currentNode.next) {
      currentNode.prev.next = null;
    } else {
      currentNode.prev.next = currentNode.next;
      currentNode.next.Prev = currentNode.prev;
    }
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

const dlist = new DulinkedList();
dlist.insert('head', 'second');
dlist.insert('second', 'third');
dlist.insert('second', 'four');
console.log(dlist.display());
dlist.remove('second');
console.log(dlist.display());
console.log(dlist);
