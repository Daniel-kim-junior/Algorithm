import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main6 {
    static long dp[][];
    static int dx[] = {-1, 1, 0, 0};
    static int dy[] = {0, 0, -1, 1};
    static int N, MAP[][];
    static long max;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        N = Integer.parseInt(br.readLine());
        MAP = new int[N][N];
        for(int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            for(int j = 0; j < N; j++) {
                MAP[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        max = Long.MIN_VALUE;
        dp = new long[N][N];


        for(int i = 0; i < N; i++) {
            for(int j = 0; j < N; j++){
                max = Math.max(max , solved(i, j));
            }
        }


        System.out.println(max);
    }
    public static long solved(int x, int y) {
        // 시작점
        if(dp[x][y] != 0) {
            return dp[x][y];
        }

        dp[x][y] = 1;

        for(int i = 0; i < 4; i++) {
            int nx = dx[i] + x;
            int ny = dy[i] + y;
            if(nx < 0 || ny < 0 || nx >= N || ny >= N || MAP[x][y] >= MAP[nx][ny]) {
                continue;
            }

            dp[x][y] = Math.max(dp[x][y], solved(nx, ny) + 1);
        }
        return dp[x][y];
    }
}
