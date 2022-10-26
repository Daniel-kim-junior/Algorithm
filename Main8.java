import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main8 {
    static int N,  max;
    static int array[];
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        // depth[N][depth] A + B 더한 결과 중에
        int T = Integer.parseInt(br.readLine());

        for(int i = 0; i < T; i++) {
            N = Integer.parseInt(br.readLine());
            st = new StringTokenizer(br.readLine());
            array = new int[N + 1];
            int dp[][] = new int[N + 1][N + 1];
            int sumArr[] = new int[N + 1];
            for(int j = 1; j < N + 1; j++) {
                array[j] = Integer.parseInt(st.nextToken());
                sumArr[j] = sumArr[j - 1] + array[j];
            }


            for(int t = 1; t <= N; t++) {
                for(int from = 1; from + t <= N; from++) {

                    int to = from + t;

                    dp[from][to] = Integer.MAX_VALUE;
                    for(int divide = from; divide < to; divide++) {
                        dp[from][to] = Math.min(dp[from][to], dp[from][divide] + dp[divide + 1][to] + sumArr[to] - sumArr[from - 1]);
                    }
                }
            }
            System.out.println(dp[1][N]);

        }






        // 최소비용이기 때문에
    }

}
