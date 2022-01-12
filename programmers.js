// https://programmers.co.kr/learn/courses/13213/lessons/91100 큰 수 만들기 (그리디)

function solution(number, k) {
  // 만들어야 되는 숫자의 길이
  let cnt = number.length - k;

  // 만들어야하는 가장 큰 숫자
  let rst = "";
  let pivot = 0;
  let num = -1;
  while (rst.length !== cnt) {
    //만들어야 하는 가장 큰 숫자의 길이 갱신
    let tmp = cnt - rst.length;

    if (number.length - pivot >= tmp) {
      // 선택 가능한 수가 9일 때
      if (number[pivot] === "9") {
        rst += "9";
        number = number.slice(number.indexOf("9") + 1);
        pivot = 0;
        num = -1;
        continue;
      } else {
        // 9가 아닐때 num이랑 비교해서 큰 값을 갱신해준다.
        if (number[pivot] > num) {
          num = number[pivot];
        }
      }

      pivot++;
    } else {
      // 선택 불가할 때 제일 큰 수 넣어준다

      rst += num;
      number = number.slice(number.indexOf(num) + 1);
      pivot = 0;
      num = -1;
    }
  }

  return rst;
}
