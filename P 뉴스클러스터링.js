function solution(str1, str2) {
  // 정규 표현식을 이용해 특수문자와 숫자를 제외한 문자들만 부분집합에 넣는다.
  function reg(str) {
    let arr = [];
    let law = str.toUpperCase();
    for (let i = 0; i < str.length - 1; i++) {
      let st = law.substr(i, 2);
      if (st.match(/[A-Za-z]{2}/)) {
        arr.push(st);
      }
    }
    return arr;
  }

  let tmp1 = reg(str1);
  let tmp2 = reg(str2);
  let union = 0;
  let dup = 0;

  let set = new Set([...tmp1, ...tmp2]);
  set.forEach((item) => {
    let num1 = tmp1.filter((x) => item === x).length;
    let num2 = tmp2.filter((x) => item === x).length;
    union += Math.max(num1, num2);
    dup += Math.min(num1, num2);
  });

  return union === 0 ? 65536 : Math.floor((dup / union) * 65536);
}
