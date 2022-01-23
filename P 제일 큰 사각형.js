function solution(board) {
  let len = board.length;
  let alen = board[0].length;
  let mx = 0;
  let nx = [-1, 0, -1];
  let ny = [0, -1, -1];
  if (len === 1 && alen === 1) return 1;

  for (let i = 1; i < len; i++) {
    for (let j = 1; j < alen; j++) {
      let ne = 10000000000;
      if (board[i][j] !== 0) {
        for (let k = 0; k < 3; k++) {
          let tx = i + nx[k];
          let ty = j + ny[k];
          if (ne > board[tx][ty]) {
            ne = board[tx][ty];
          }
        }
        board[i][j] = ne + 1;
        if (board[i][j] > mx) {
          mx = board[i][j];
        }
      }
    }
  }

  return mx * mx;
}
console.log(
  solution([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ])
);
