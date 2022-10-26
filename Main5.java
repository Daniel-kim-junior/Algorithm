import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main5 {
    static ArrayList<Node> graph;
    static long dp[];
    static boolean inf;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int start = Integer.parseInt(st.nextToken());
        int end = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        dp = new long[N];
        graph = new ArrayList<>();
        for(int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());
            int from = Integer.parseInt(st.nextToken());
            int to = Integer.parseInt(st.nextToken());
            long cost = Integer.parseInt(st.nextToken()) * -1;
            graph.add(new Node(from, to, cost));
        }
        st = new StringTokenizer(br.readLine());
        long earn[] = new long[N];
        for(int i = 0; i < N; i++) {
            earn[i] = Long.parseLong(st.nextToken());
        }
        inf = false;
        Belman(start, N, earn, end);
        if(dp[end] == Long.MIN_VALUE) {
            System.out.println("gg");
        } else if(inf) {
            System.out.println("Gee");
        } else {
            System.out.println(dp[end]);
        }

    }
    public static void Belman(int start, int N, long earn[], int end) {
        Arrays.fill(dp, Long.MIN_VALUE);
        dp[start] = earn[start];
        for(int i = 0; i < N + 100; i++) {
            for(Node nd :graph) {

                if(dp[nd.from] == Long.MIN_VALUE) continue;



                if(dp[nd.from] == Long.MAX_VALUE) dp[nd.to] = Long.MAX_VALUE;
                else if(dp[nd.from] + earn[nd.to] + nd.cost > dp[nd.to]) {
                    dp[nd.to] = dp[nd.from] + earn[nd.to] + nd.cost;

                    if(i >= N - 1) {
                        dp[nd.to] = Long.MAX_VALUE;
                    }
                }
            }
        }
        if(dp[end] == Long.MAX_VALUE) {
            inf = true;
        }

    }
    static class Node {
        int from;
        int to;
        long cost;
        public Node(int from, int to, long cost) {
            this.from = from;
            this.to = to;
            this.cost = cost;
        }
    }
}