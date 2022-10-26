import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main14 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        int N = Integer.parseInt(br.readLine());



        int top, mid, bottom;
        st = new StringTokenizer(br.readLine());
        int x1 = Integer.parseInt(st.nextToken());
        int y1 = Integer.parseInt(st.nextToken());
        int z1 = Integer.parseInt(st.nextToken());

        int x2 = x1;
        int y2 = y1;
        int z2 = z1;


        int r1 = 0;
        int r2 = 0;
        for(int i = 1; i < N; i++) {
            int rst1 = Integer.MIN_VALUE;
            int rst2 = Integer.MAX_VALUE;
            st = new StringTokenizer(br.readLine());
            top = Integer.parseInt(st.nextToken());
            mid = Integer.parseInt(st.nextToken());
            bottom = Integer.parseInt(st.nextToken());


        }


//        System.out.println(r1  + " " + r2);


    }
}
