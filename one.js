class Queue {
  constructor() {
    this.head = 1;
    this.tail = 0;
    this.queue = [];
  }
  enqueue(value) {
    this.queue[++this.tail] = value;
  }
  dequeue() {
    let tmp = this.queue[this.head];
    delete this.queue[this.head];
    this.head += 1;
    return tmp;
  }
  peek() {
    return this.queue[this.head];
  }

  last() {
    return this.queue[this.tail];
  }
}

function solution(n, words) {
  let set = new Set();
  let rst = [];
  let queue = new Queue();
  let count = 1;
  let len = words.length;
  words.forEach((item) => queue.enqueue(item));

  while (true) {
    let tmp = queue.dequeue();

    if (set.has(tmp) || (count !== 1 && tmp[0] !== queue.last()[queue.last().length - 1])) {
      rst[0] = count % n === 0 ? n : count % n;
      rst[1] = count % n === 0 ? Math.floor(count / n) : Math.floor(count / n) + 1;
      break;
    } else {
      set.add(tmp);
    }
    // 전부 돌았을 때
    if (len === count) {
      rst[0] = 0;
      rst[1] = 0;
      break;
    }
    count++;
    queue.enqueue(tmp);
  }

  return rst;
}

console.log(
  solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])
);
