import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main13 {
    static int N;
    static HashMap<String, ArrayList<String>> tree;
    static boolean visited[];
    static String rst1 = "A";
    static String rst2 = "";
    static String rst3 = "";
    static boolean flag = false;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        N = Integer.parseInt(br.readLine());

        tree = new HashMap<>();
        visited = new boolean[26];
        for(int i = 1; i <= N; i++) {
            st = new StringTokenizer(br.readLine());
            String cur = st.nextToken();
            String leftC = st.nextToken();
            String rightC = st.nextToken();
            ArrayList<String> arr = new ArrayList<>();
            arr.add(leftC);
            arr.add(rightC);
            tree.put(cur, arr);
        }
        preSearch("A");
        visited = new boolean[26];
        midSearch("A");
        visited = new boolean[26];
        endSearch("A");
        System.out.println(rst1);
        System.out.println(rst2);
        System.out.println(rst3);
    }


    // 전위
    public static void preSearch(String st) {
        ArrayList<String> tl = tree.get(st);
        if(!st.equals("A")) {
            rst1 = rst1.concat(st);
        }
        for(int i = 0; i < 2; i++) {
            if(tl.get(i).equals(".") || visited[tl.get(i).charAt(0) - 65]) {
                continue;
            }
            visited[tl.get(i).charAt(0) - 65] = true;
            preSearch(tl.get(i));
            visited[tl.get(i).charAt(0) - 65] = false;
        }

    }
    // 중위
    public static void midSearch(String st) {
        ArrayList<String> tl;
        Queue<String> queue = new LinkedList<>();
        String A = "A";
        queue.offer(A);
        visited[A.charAt(0) - 65] = true;
        while(!queue.isEmpty()) {
            String poll = queue.poll();
            tl = tree.get(poll);

            for(int i = 0; i < 2; i++) {

            }

        }

    }


    // 후위
    public static void endSearch(String st) {

    }

    static class Node {
        String cur;
        String left;
        String right;
        Node(String cur, String left, String right) {
            this.cur = cur;
            this.left = left;
            this.right = right;
        }
    }
}
