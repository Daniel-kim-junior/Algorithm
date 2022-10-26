import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class Main {
    // 특정한 최단거리 1504
    static class Node implements Comparable<Node> {
        int to;
        long cost;
        public Node(int to, long cost) {
            this.to = to;
            this.cost = cost;
        }

        @Override
        public int compareTo(Node o) {
            return (int)(this.cost - o.cost);
        }
    }
    static int l1, l2;
    static ArrayList<Node> graph[];
    static long dp[];
    public static void main(String[] args) throws IOException {
    //   백준 1504번
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int E = Integer.parseInt(st.nextToken());

        graph = new ArrayList[N+1];
        for(int i = 1; i < N+1; i++) {
            graph[i] = new ArrayList<>();
        }

        for(int i = 0; i < E; i++) {
            st = new StringTokenizer(br.readLine());
            int from = Integer.parseInt(st.nextToken());
            int to = Integer.parseInt(st.nextToken());
            int cost = Integer.parseInt(st.nextToken());
            graph[from].add(new Node(to, cost));
            graph[to].add(new Node(from, cost));
        }
        st = new StringTokenizer(br.readLine());
        l1 = Integer.parseInt(st.nextToken());
        l2 = Integer.parseInt(st.nextToken());


        dp= new long[N + 1];
        Arrays.fill(dp, Long.MAX_VALUE);
        dp[1] = 0L;
        long x1 = djkstra(1, l1);

        Arrays.fill(dp, Long.MAX_VALUE);
        dp[l1] = 0L;
        long x2 = djkstra(l1, l2);

        Arrays.fill(dp, Long.MAX_VALUE);
        dp[l2] = 0L;
        long x3 = djkstra(l2, N);


        Arrays.fill(dp, Long.MAX_VALUE);
        dp[1] = 0L;
        long y1 = djkstra(1, l2);
        Arrays.fill(dp, Long.MAX_VALUE);
        dp[l2] = 0L;
        long y2 = djkstra(l2, l1);
        Arrays.fill(dp, Long.MAX_VALUE);
        dp[l1] = 0L;
        long y3 = djkstra(l1, N);

        long INF = Long.MAX_VALUE;
        if((x1 == INF || x2 == INF || x3 == INF) && (y1 == INF || y2 == INF || y3 == INF)) {
            System.out.println(-1);
            return;
        }

        if(x1 + x2 + x3 < y1+y2+y3) {
            System.out.println(x1 + x2 + x3);
        } else{
            System.out.println(y1+y2+y3);
        }




    }
    public static long djkstra(int start, int end) {
        PriorityQueue<Node>pq = new PriorityQueue<>();
        pq.offer(new Node(start, 0));
        while(!pq.isEmpty()) {
            Node poll = pq.poll();
            for(Node nd  : graph[poll.to]) {
                if(dp[nd.to] > nd.cost + dp[poll.to]) {
                    dp[nd.to] = poll.cost + nd.cost;
                    pq.offer(new Node(nd.to, dp[nd.to]));
                }
            }
        }



        return dp[end];
    }
}
