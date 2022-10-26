import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main10 {
    // 1253 좋다
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int array[] = new int[N];
        StringTokenizer st = new StringTokenizer(br.readLine());
        for(int i = 0; i < N; i++) {
            int num =  Integer.parseInt(st.nextToken());
            array[i] = num;
        }
        Arrays.sort(array);
        int result = 0;
        for(int i = 0; i < N; i++) {
            int ob = array[i];

            int lf = 0;
            int rig = N - 1;
            while(lf < rig) {
                if(lf == i) {
                    lf++;
                    continue;
                }
                if(rig == i) {
                    rig--;
                    continue;
                }

                if(ob == array[lf] + array[rig]) {
                    result++;
                    break;
                }
                if(ob < array[lf] + array[rig]) {
                    rig--;
                } else {
                    lf++;
                }
            }
        }





        System.out.println(result);
    }
}
