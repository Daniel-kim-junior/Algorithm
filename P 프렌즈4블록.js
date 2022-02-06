function solution(m, n, board) {
  let arr = [];
  board.map((item) => {
    arr.push(item.split(""));
  });
  // 3방향 체크 (왼, 밑, 대각선 밑)

  let count = 0;
  // 현재 상태에서 2*2인 같은 블럭인 상태를 0으로 초기화
  while (isTrue(arr, m, n)) {
    arr = changeMap(arr, m, n);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 0) {
        count++;
      }
    }
  }
  return count;
}

function isTrue(board, m, n) {
  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (
        board[i][j] === board[i + 1][j] &&
        board[i][j] === board[i + 1][j + 1] &&
        board[i][j] === board[i][j + 1] &&
        board[i][j] !== 0
      ) {
        return true;
      }
    }
  }
  return false;
}

function changeMap(board, m, n) {
  let arr = Array.from(Array(m), () => Array(n).fill(false));

  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (
        board[i][j] === board[i + 1][j] &&
        board[i][j] === board[i + 1][j + 1] &&
        board[i][j] === board[i][j + 1] &&
        board[i][j] !== 0
      ) {
        arr[i][j] = true;
        arr[i][j + 1] = true;
        arr[i + 1][j + 1] = true;
        arr[i + 1][j] = true;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j]) {
        board[i][j] = 0;
      }
    }
  }

  for (let i = m - 2; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      let t = 1;
      if (board[i + t][j] === 0 && board[i][j] !== 0) {
        while (i + t < m && board[i + t][j] === 0) {
          t++;
        }
        board[i + t - 1][j] = board[i][j];
        board[i][j] = 0;
      }
    }
  }

  return board;
}
