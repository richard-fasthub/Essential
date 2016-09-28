
/**
 *
 * @author Richie
 */
public class DimensionalArray {
    public static void main(String[] args){
        String[][] states =new String[3][2];
        states[0][0]="Tanzania";
            states[0][1]="Uganda";
                states[1][0]="Kenya";
                    states[1][1]="Rwanda";
                     states[2][0]="South Africa";
               
        for (int i = 0; i< states.length; i++){
            StringBuilder sb = new StringBuilder();
            sb.append("The capital of")
                    .append(states[1][0])
                    .append("is")
                    .append(states[i][0])
                    .append(".");
            System.out.println(sb);
        }
                    
    }
    
}
