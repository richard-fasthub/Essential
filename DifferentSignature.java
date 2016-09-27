
/**
 *
 * @author Richie
 */import java.util.Scanner;
   
     public class DifferentSignature{
    
         public static void main(String[] args){
              String s1 = getInput("Enter value 1: ");
              String s2 = getInput("Enter value 2: ");
     
              double result = addValues(s1,s2);
              System.out.println("This answer is " + result);
         }
         static String getInput(String prompt){
             System.out.print(prompt);
             Scanner sc = new Scanner(System.in);
             
             return sc.nextLine();
             
        }
   static double addValues(String s1, String s2){
              double d1 = Double.parseDouble(s1);
              double d2 = Double.parseDouble(s2);
              double result =d1 + d2;
              return result;
   }
    static double addValues(String s1, String s2, String s3){
              double d1 = Double.parseDouble(s1);
              double d2 = Double.parseDouble(s2);
              double result =d1 + d2;
              return result;
   }
   }

