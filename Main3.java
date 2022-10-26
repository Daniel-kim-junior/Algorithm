import java.util.*;
import java.io.*;
class Main3 {
    static int ndList[];
    static ArrayList<Node> ist;
    static int answer;
    static boolean visited[];
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.println(solution(Integer.parseInt(br.readLine())));
    }
    public static int solution(int n) {
        answer = 0;
        ndList = new int[n];
        visited = new boolean[n*n];
        ist = new ArrayList<>();
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                ist.add(new Node(i, j));
            }
        }

        DFS(0 , n, 0);

        return answer;
    }

    static void DFS(int dep, int n, int pos) {
        if(dep == n) {
            // 퀸 n개 선택

            answer++;
            return;
        }

        for(int i = pos; i < n*n; i++) {
            if(visited[i]) {
                continue;
            }
            if(!prune(i, dep)) {
                continue;
            }
            visited[i] = true;
            ndList[dep] = i;
            DFS(dep+1, n, i+1);
            visited[i] = false;

        }
    }
    static boolean prune(int obj, int depth) {
        Node xy = ist.get(obj);

        for(int i = 0; i < depth; i++) {
            int nd = ndList[i];
            if(xy.x == ist.get(nd).x || xy.y == ist.get(nd).y) {
                return false;
            }
            if(Math.abs(xy.x - ist.get(nd).x) == Math.abs(xy.y - ist.get(nd).y)) {
                return false;
            }

        }
        return true;
    }
    static class Node {
        int x;
        int y;

        public Node(int x, int y) {
            this.x = x;
            this.y = y;
        }
    }
}