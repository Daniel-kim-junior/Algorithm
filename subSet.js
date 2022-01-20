const subSet = function (arr) {
  let flag = new Array(arr.length).fill(false);
  const subSets = [];

  const subSet = function DFS(depth) {
    if (depth === arr.length) {
      let buho = [];
      console.log(flag);
      flag.filter((item) => {
        item ? buho.push("+") : buho.push("-");
      });
      subSets.push(buho);
      return;
    }
    flag[depth + 1] = true;
    subSet(depth + 1);

    flag[depth + 1] = false;
    subSet(depth + 1);
  };
  subSet(0);
  return subSets;
};

function solution(numbers, target) {
  let answer = subSet(numbers);
  let result = 0;

  answer.forEach((item) => {
    let sum = 0;
    for (let i = 1; i < numbers.length + 1; i++) {
      if (item[i] === "+") {
        sum += numbers[i - 1];
      } else {
        sum -= numbers[i - 1];
      }
    }

    if (sum === target) {
      result++;
    }
  });
  return result;
}
console.log(solution([1, 1, 1, 1, 1], 3));
