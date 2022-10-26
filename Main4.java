import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main4 {
    static long dp[];
    static boolean flag;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());



        // 간선
        ArrayList<Node> arr = new ArrayList<Node>();
        for(int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());
            int from = Integer.parseInt(st.nextToken());
            int to = Integer.parseInt(st.nextToken());
            long cost = Long.parseLong(st.nextToken());
            arr.add(new Node(from, to, cost));
        }
        // 노드의 최단거리를 기록할 배열
        dp = new long[N+1];
        Arrays.fill(dp, Long.MAX_VALUE);
        dp[1] = 0L;
        // 1번에서 최단 거리 갱신
        flag = false;
        Belman( N, arr);
        if(flag) {
            System.out.println(-1);
        } else {
            StringBuilder sb = new StringBuilder();
            for(int i = 2; i <= N; i++) {
                if(dp[i] == Long.MAX_VALUE) {
                    sb.append("-1\n");
                } else {
                    sb.append(dp[i]+"\n");
                }
            }
            System.out.println(sb);
        }
    }
    static void Belman(int V, ArrayList<Node> arr) {
        // 노드의 개수 만큼 돌면서 간선 탐색
        for(int i = 0; i < V; i++) {
            boolean fl = false;
            for(Node nd: arr) {
                //  nd.x -> nd.y 로 가는 최단 코스트 갱신
                if(dp[nd.x] != Long.MAX_VALUE && nd.cost + dp[nd.x] < dp[nd.y]){
                    dp[nd.y] = nd.cost + dp[nd.x];
                    fl = true;
                    if(i == V - 1) {
                        // 무한 음수 사이클 발생
                        flag = true;
                        return;
                    }
                }
            }
            if(!fl) {
                return;
            }
        }
    }

    static class Node {
        int x;
        int y;
        long cost;
        public Node(int x, int y, long cost) {
            this.x = x;
            this.y = y;
            this.cost = cost;
        }
    }
}
