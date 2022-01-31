function solution(A, B) {
  let arr = A.sort((a, b) => a - b);
  let arr2 = B.sort((a, b) => b - a);

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * arr2[i];
  }
  return sum;
}
