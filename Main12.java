import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class Main12 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String st = br.readLine();
        int stLen = st.length();
        Stack<Character> stk = new Stack<>();
        StringBuilder sb = new StringBuilder("");
        boolean buho[] = new boolean[101];
        Stack<Character> buhoList[] = new Stack[101];

        for(int i = 0; i < 101; i++) {
            buhoList[i] = new Stack<>();
        }
        int idx = 1;
        for(int i = 0; i < stLen; i++) {
            char ch = st.charAt(i);
            if(ch == '(') {
                buho[idx] = true;
                idx++;
                continue;
            }
            // 괄호 안에 들어가있을 때
            if(buho[idx - 1]) {
                if(ch != '*' && ch != '/' && ch != '+' && ch != '-' && ch != ')') {
                    sb.append(ch);
                } else if(ch == ')') {
                   buho[idx - 1] = false;
                   while(!buhoList[idx - 1].isEmpty()) {
                       sb.append(buhoList[idx - 1].pop());
                   }
                   idx--;
                } else {
                    if(buhoList[idx - 1].isEmpty()) {
                        buhoList[idx - 1].push(ch);
                    } else {
                        if(ch == '+' || ch == '-') {
                            while(!buhoList[idx - 1].isEmpty()) {
                                sb.append(buhoList[idx - 1].pop());
                            }
                            buhoList[idx - 1].push(ch);
                        } else if((ch == '*' || ch == '/') && (buhoList[idx - 1].peek() == '*' || buhoList[idx - 1].peek() == '/')) {
                            while(!buhoList[idx - 1].isEmpty()) {
                                if(buhoList[idx - 1].peek() == '+' || buhoList[idx - 1].peek() == '-' ) {
                                    break;
                                }
                                sb.append(buhoList[idx - 1].pop());
                            }
                            buhoList[idx - 1].push(ch);
                        }
                        else {
                            buhoList[idx - 1].push(ch);
                        }
                    }
                }

            } else {
                if(ch != '*' && ch != '/' && ch != '+' && ch != '-') {
                    sb.append(ch);
                } else {
                    if(stk.isEmpty()) {
                        stk.push(ch);
                    } else {
                        if(ch == '+' || ch == '-') {
                            while(!stk.isEmpty()) {
                                sb.append(stk.pop());
                            }
                            stk.push(ch);
                        } else if((ch == '*' || ch == '/') && (stk.peek() == '*' || stk.peek() == '/')) {
                            while(!stk.isEmpty()) {
                                if(stk.peek() == '+' || stk.peek() == '-' ) {
                                    break;
                                }
                                sb.append(stk.pop());
                            }
                            stk.push(ch);
                        } else {
                            stk.push(ch);
                        }
                    }
                }
            }


        }

        while(!stk.isEmpty()) {
            sb.append(stk.pop());
        }
        System.out.println(sb);
    }
}
