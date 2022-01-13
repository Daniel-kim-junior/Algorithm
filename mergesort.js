/// 합병 정렬
// 분해

const mergesort = (arr) => {
  if (arr.length < 2) {
    return arr;
  } else {
    const mid = Math.floor(arr.length / 2);
    return merge(mergesort(arr.slice(0, mid)), mergesort(arr.slice(mid)));
  }
};

const merge = (a, b) => {
  if (a.length === 0) return b;
  else if (b.length === 0) return a;
  else if (a[0] < b[0]) return [a[0], ...merge(a.slice(1), b)];
  else return [b[0], ...merge(a, b.slice(1))];
};

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  preorder(currentNode) {
    // 전위 순회
    console.log(currentNode.value);
    if (currentNode.left) this.preorder(currentNode.left);
    if (currentNode.right) this.preorder(currentNode.right);
  }

  inorder(currentNode) {
    //중위 순회
    if (currentNode.left) this.inorder(currentNode.left);
    console.log(currentNode.value);
    if (currentNode.right) this.inorder(currentNode.right);
  }
  postorder(currentNode) {
    // 후위 순회
    if (currentNode.left) this.postorder(currentNode.left);
    if (currentNode.right) this.postorder(currentNode.right);
    console.log(currentNode.value);
  }
}

const tree = new Tree(new Node(1));
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.right.left = new Node(6);
tree.root.right.right.left = new Node(8);
tree.root.right.right.right = new Node(9);

console.log("전위 순회");
tree.preorder(tree.root);

console.log("중위 순회");
tree.inorder(tree.root);

console.log("후위 순회");
tree.postorder(tree.root);
