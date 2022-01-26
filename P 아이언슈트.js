function solution(n) {
  let use = 0;
  let answer;
  // 뒤에서 접근하는 생각도 좀 하자

  while (n !== 1) {
    if (n % 2 !== 0) {
      n = n - 1;
      use++;
    } else {
      n = n / 2;
    }
  }
  if (use > 0) {
    answer = use + 1;
  } else {
    answer = 1;
  }
  return answer;
}

console.log(solution(6));
