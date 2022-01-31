const subset = (arr) => {
  const flag = new Array(arr.length).fill(false);

	const count = 0;
	const pcl = function DFS(depth) {

		if (depth === arr.length) {
			let num = 0;
			for (let i = 0; i < flag.length; i++) {
				if (flag[i]) {
					num++;
				}
			}
			if (num !== 0 || num !== flag.length) {
				count++;
			}
				
		}
		if(arr[depth][1])
		flag[depth] = true;
		DFS(depth + 1);

		flag[depth] = false;
		DFS(depth + 1);
	}
}