class maxHeap {
  constructor() {
    this.heap = [null];
  }
  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length == 2) return this.heap.pop();

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;

        currentIndex = rightIndex;
      } else {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }
    return returnValue;
  }
}

class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node(currentNode.value + char));
      }
      currentNode = currentNode.children.get(char);
    }
  }

  has(string) {
    let currentNode = this.root;
    let count = 0;
    for (const char of string) {
      if (!currentNode.children.has(char)) {
        return count;
      }
      currentNode = currentNode.children.get(char);
      count++;
    }
    return count;
  }
}

function binarySearch(array, findValue) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left < right) {
    if (array[mid] === findValue) {
      return mid;
    }

    if (array[mid] < findValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  return -1;
}

// 이진 탐색 트리

class binaryNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new binaryNode(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.value < value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      } else {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      }
    }
  }
}

// class Queue {
//   constructor() {
//     this.queue = [];
//     this.front = null;
//     this.rear = null;
//   }

//   enqueue(value) {
//     this.queue[this.rear++] = value;
//   }

//   dequeue() {
//     let value = this.queue[this.front];
//     delete this.queue[this.front];
//     this.front += 1;
//     return value;
//   }

//   peek() {
//     return this.queue[this.front];
//   }

//   size() {
//     return this.rear - this.front;
//   }
// }

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    let value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution3(n, edge) {
  const graph = Array.from(Array(n + 1), () => []);

  for (const [src, dest] of edge) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  const distance = Array(n + 1).fill(0);
  distance[1] = 1;

  //BFS

  const queue = new Queue();
  queue.enqueue(1);
  while (!queue.isEmpty()) {
    const src = queue.dequeue();
    for (let dist of graph[src]) {
      if (distance[dist] === 0) {
        queue.enqueue(dist);
        distance[dist] = distance[src] + 1;
      }
    }
  }

  const max = Math.max(...distance);
  return distance.filter((item) => item === max).length;
}

console.log(
  solution3(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);

function solution2(number, k) {
  // 만들어야 되는 숫자의 길이
  let cnt = number.length - k;
  let Arr = [];
  for (let i = 0; i < number.length; i++) {
    Arr.push(number[i]);
  }

  // 만들어야하는 가장 큰 숫자
  let rst = "";
  let num;
  while (rst.length !== cnt) {
    //만들어야 하는 가장 큰 숫자의 길이 갱신
    let tmp = cnt - rst.length;

    // 맥스 힙 생성 갱신
    let maxheap = new maxHeap();

    for (let i = 0; i < Arr.length; i++) {
      if (Arr.length - i < tmp) {
        continue;
      } else {
        maxheap.push(Arr[i]);
      }
    }
    num = maxheap.pop();
    rst += num;
    Arr = Arr.slice(Arr.indexOf(String(num)) + 1);
  }

  return rst;
}
