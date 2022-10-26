import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import java.util.StringTokenizer;

public class Main11 {
    // 백준 부분합 1806
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int S = Integer.parseInt(st.nextToken());

        st = new StringTokenizer(br.readLine());
        Integer array [] = new Integer[N];
        for(int i = 0; i < N; i++) {
            array[i] = Integer.parseInt(st.nextToken());
            if(array[i] >= S) {
                System.out.println(1);
                return;
            }
        }
        int min = Integer.MAX_VALUE;
        int left = 0;
        int right = 1;
        int sum = array[left] + array[right];
        while(left < right) {

            if(sum >= S) {
                if(min > right - left) {
                    min = right - left;
                }
                sum -= array[left];
                left++;
            } else {
                right++;
                if(right == N) {
                    break;
                }
                sum += array[right];
            }

        }
        if(min == Integer.MAX_VALUE) {
            System.out.println(0);
        } else {
            System.out.println(min + 1);
        }
    }
}
