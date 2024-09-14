// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    let newNode = new TreeNode(val);

    if (this.root === null){
      this.root = newNode;
      currentNode = newNode;
    }

    if (currentNode === null){
      return newNode;
    }

    if (val < currentNode.val){
      let leftNode = this.insert(val, currentNode.left);

      if (currentNode.left === null){
        currentNode.left = leftNode;
      }
    }

    if (val > currentNode.val){
      let rightNode = this.insert(val, currentNode.right);

      if (currentNode.right === null){
        currentNode.right = rightNode;
      }
    }


  }

  search(val) {
    // Your code here
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
}
}

module.exports = { BinarySearchTree, TreeNode };
