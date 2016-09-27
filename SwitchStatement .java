
/**
 *
 * @author Richie
 */
import java.util.Scanner;
public class SwitchStatement {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter a number:");
        String input = sc.nextLine();
        int monthNumber = Integer.parseInt(input);
        
        switch(monthNumber){
            case 1:
                System.out.println("The month is January");
                break;
                
            case 2:
                System.out.println("The month is February");
                break;
            case 3:
                System.out.println("The month is March");
                break;
            case 4:
                System.out.println("The month is April");
                break;    
            default:
                System.out.println("You chose another month");
                
        }
    }
}
