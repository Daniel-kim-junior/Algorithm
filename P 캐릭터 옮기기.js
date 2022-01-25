function solution(dirs) {
  let map = new Array(11);
  for (let i = 0; i < 11; i++) {
    map[i] = new Array(11);
    for (let j = 0; j < 11; j++) {
      map[i][j] = new Array(4).fill(false);
    }
  }
  let baseX = 5;
  let baseY = 5;
  let count = 0;
  // 동서남북
  let nx = [-1, 1, 0, 0];
  let ny = [0, 0, 1, -1];

  for (let i = 0; i < dirs.length; i++) {
    if (dirs[i] === "U") {
      let tx = nx[0] + baseX;
      let ty = ny[0] + baseY;
      if (tx < 0 || tx > 10 || ty < 0 || ty > 10) {
        continue;
      }

      // 지나오지 않았다면
      if (!map[tx][ty][0]) {
        map[tx][ty][0] = true;
        map[baseX][baseY][1] = true;
        count++;
      }
      baseX = tx;
      baseY = ty;
    } else if (dirs[i] === "D") {
      let tx = nx[1] + baseX;
      let ty = ny[1] + baseY;

      if (tx < 0 || tx > 10 || ty < 0 || ty > 10) {
        continue;
      }
      // 지나오지 않았다면
      if (!map[tx][ty][1]) {
        map[tx][ty][1] = true;
        map[baseX][baseY][0] = true;
        count++;
      }
      baseX = tx;
      baseY = ty;
    } else if (dirs[i] === "R") {
      let tx = nx[2] + baseX;
      let ty = ny[2] + baseY;

      if (tx < 0 || tx > 10 || ty < 0 || ty > 10) {
        continue;
      }
      // 지나오지 않았다면
      if (!map[tx][ty][2]) {
        map[tx][ty][2] = true;
        map[baseX][baseY][3] = true;
        count++;
      }
      baseX = tx;
      baseY = ty;
    } else if (dirs[i] === "L") {
      let tx = nx[3] + baseX;
      let ty = ny[3] + baseY;

      if (tx < 0 || tx > 10 || ty < 0 || ty > 10) {
        continue;
      }
      // 지나오지 않았다면
      if (!map[tx][ty][3]) {
        map[tx][ty][3] = true;
        map[baseX][baseY][2] = true;
        count++;
      }
      baseX = tx;
      baseY = ty;
    }
  }
  return count;
}

console.log(solution("ULURRDLLU"));
