import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main9 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        int N = Integer.parseInt(br.readLine());
        int dp[][] = new int[N+1][N+1];
        int matrix[][] = new int[N+1][N+1];


        for(int i = 1; i <= N; i++) {
            for(int j = 1; j <= N; j++) {
                if(i == j) {
                    dp[i][j] = 0;
                } else {
                    dp[i][j] = Integer.MAX_VALUE;
                }
            }
        }

        for(int i = 1;  i <= N; i++) {
            st = new StringTokenizer(br.readLine());
            for(int j = 0; j < 2; j++) {
                int n = Integer.parseInt(st.nextToken());
                matrix[i][j] = n;
            }
        }




        // 곱셈 5 3 2

        // a * b + (a * b) * c,     b * c + (b * c) * a

        for(int i = 1; i <= N; i++) {
            for(int from = 1; from + i <= N; from++) {
                int to = i + from;
                // 1 행렬과 2행렬
                for(int divide = from; divide < to; divide++) {
                    dp[from][to] = Math.min(dp[from][to], dp[from][divide] + dp[divide+1][to] + matrix[from][0] * matrix[i][1] * matrix[to][1]);
                }
            }
        }
        System.out.println(dp[1][N]);
    }
}
