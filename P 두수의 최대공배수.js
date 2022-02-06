function res(a1, a2) {
  //   let tmp = arr.sort((a, b) => a - b);

  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }

    return gcd(b, a % b);
  };
  const lcm = (a, b) => (a * b) / gcd(a, b);

  return lcm(a1, a2);
}

function solution(arr) {
  let tmp = arr.sort((a, b) => a - b);
  let rst = tmp[0];
  rst = res(arr[2], arr[3]);
  return rst;
}

console.log(solution([2, 6, 8, 14]));
