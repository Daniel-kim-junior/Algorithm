function permutations(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  let result = [];

  // 요소를 순환한다.
  arr.forEach((fixed, idx, arr) => {
    // 현재 index를 제외한 요소를 추출한다.
    // index번째는 선택된 요소
    const rest = arr.filter((_, index) => index !== idx);
    // 선택된 요소를 제외하고 재귀 호출
    const perms = permutations(rest, n - 1);
    // 선택된 요소와 재귀 호출을 통해 구한 순열을 합친다.
    const combine = perms.map((v) => [fixed, ...v]);
    result.push(...combine);
  });

  return result;
}
