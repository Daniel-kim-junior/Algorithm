//유클리드 호제법을 이용한 풀이
//
// - a,b 를 서로 나눌때, 나누어진다면 b가 최대 공약수 이다. (a>b)
//
// - 만약 a,b가 나누어지지 않으면 b와 a를 b로 나눈 나머지를 다시 나눈다
//
// - 서로가 나누어지면 a%b 가 최대공약수이다. 나누어지지 않는다면 위처럼 b와 a를 b를 나눈 나머지를 다시 나눈다.

const solutuon = (n, m) => {
  const gcd = (a, b) => {
    if (b === 0) return a; // 나누어지면 a 리턴
    return gcd(b, a % b); // 나누어지지 않는다면 b와 a%b를 다시 나눈다
  };
  const lcm = (a, b) => (a * b) / gcd(a, b); // 두 수의 곱을 최대공약수로 나눈다.
  return console.log(`최대 공약수는? ${gcd(n, m)}, 최대 공배수는? ${lcm(n, m)}`);
};
console.log(solutuon(6, 12));
