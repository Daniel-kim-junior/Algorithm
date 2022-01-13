function solution(n) {
  const arr = [false, false, ...Array(n - 1).fill(true)];
  let cnt = 0;

  for (let j = 2; j * j <= n; j++) {
    if (arr[j]) {
      // 소수인 2를 2 * 2 부터 시작 2를 더해가면서 소수가 아니라고 표시해줌
      for (let i = j * 2; i <= n; i += j) {
        arr[i] = false;
      }
    }
  }

  return arr.filter((item) => item === true).length;
}
