class CreateNode {
  constructor(value) {
    this.node = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseNode(treeNode, callback) {
    if (treeNode !== null) {
      this.traverseNode(treeNode.left, callback);
      callback(treeNode.node);
      this.traverseNode(treeNode.right, callback);
    }
  }

  traverse(callback) {
    this.traverseNode(this.root, callback);
  }

  insertNode(curNode, treeNode) {
    if (treeNode.node < curNode.node) {
      if (curNode.left === null) {
        curNode.left = treeNode; // eslint-disable-line
      } else {
        this.insertNode(curNode.left, treeNode);
      }
    } else if (curNode.right === null) {
      curNode.right = treeNode; // eslint-disable-line
    } else {
      this.insertNode(curNode.right, treeNode);
    }
  }

  createTree(value) {
    const treeNode = new CreateNode(value);
    if (this.root == null) {
      this.root = treeNode;
    } else {
      this.insertNode(this.root, treeNode);
    }
  }
}

const tree = new Tree();
const arr = [4, 2, 5, 6, 3, 2, 8, 1, 12, 10];
arr.forEach(val => {
  tree.createTree(val);
});
tree.traverse(key => console.log(key));
