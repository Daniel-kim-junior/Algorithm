// 객체로 넘기는 방법
function fibonacci(n, memo) {
  memo = memo || {};
  if (memo[n]) {
    return memo[n];
  }
  if (n <= 1) {
    return 1;
  }

  return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 1, memo));
}

// 함수형
function memoizer(fun) {
  let cache = {};
  return function (n) {
    if (cache[n] != undefined) {
      return cache[n];
    } else {
      let result = fun(n);
      cache[n] = result;
      return result;
    }
  };
}

function fibonachi(n) {
  if (n <= 1) {
    return 1;
  }
  return fibonachi(n - 1) + fibonachi(n - 2);
}

const mfunc = memoizer(fibonachi);
console.log(mfunc(20));
