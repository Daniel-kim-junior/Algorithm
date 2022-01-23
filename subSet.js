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
    flag[depth] = true;
    subSet(depth + 1);

    flag[depth] = false;
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
    for (let i = 0; i < numbers.length + 1; i++) {
      if (item[i] === "+") {
        sum += numbers[i];
      } else {
        sum -= numbers[i];
      }
    }

    if (sum === target) {
      result++;
    }
  });
  return result;
}
console.log(solution([1, 1, 1, 1, 1], 3));


function solution(numbers, target) {
    let answer = 0;
    getAnswer(0,0);
    function getAnswer(x,value) {
        if(x<numbers.length){
            getAnswer(x+1,value + numbers[x]);
            getAnswer(x+1,value - numbers[x]);
        } else{
            if(value === target){
                answer++
            }
        }
    }
    return answer;
}