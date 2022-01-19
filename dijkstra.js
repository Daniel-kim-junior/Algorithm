class minHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex].cost > value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }
  pop() {
    if (this.isEmpty()) return;
    if (this.heap.length == 2) return this.heap.pop();

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (
      (this.heap[leftIndex] && this.heap[currentIndex].cost > this.heap[leftIndex].cost) ||
      (this.heap[rightIndex] && this.heap[currentIndex].cost > this.heap[rightIndex].cost)
    ) {
      if (this.heap[leftIndex].cost > this.heap[rightIndex].cost) {
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
  isEmpty() {
    return this.heap.length === 1;
  }
}

function dijkstra(N, road) {
  let heap = new minHeap();
  heap.push({ node: 1, cost: 0 });
  const array = [...Array(N + 1)].map(() => Infinity);
  array[1] = 0;

  while (!heap.isEmpty()) {
    const { node: current, cost: currentCost } = heap.pop();

    for (const [src, dest, c] of road) {
      const nextCost = c + currentCost; // 비용

      if (src === current && nextCost < array[dest]) {
        array[dest] = nextCost;
        heap.push({ node: dest, cost: nextCost });
      } else if (dest === current && nextCost < array[src]) {
        array[src] = nextCost;
        heap.push({ node: src, cost: nextCost });
      }
    }
  }

  return array;
}

function solution(N, road, K) {
  const dist = dijkstra(N, road);
  return dist.filter((x) => x <= K).length;
}

console.log(solution(6))