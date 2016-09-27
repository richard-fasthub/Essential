/**
 * Created by Richie on 9/26/2016.
 */
public class MainMath {
    public static void main(String[] args){
        int intValue1 = 94;
        int intValue2 = 99;

        int result1 = intValue1 + intValue2;
        System.out.println("Addition: " + result1);

        int result2 = intValue1 - intValue2;
        System.out.println("Substraction: " + result2);

        int result3 = intValue1 * intValue2;
        System.out.println("Multiplication: " + result3);

        double result4 = (double) intValue1 / intValue2;
        System.out.println("Division: " + result4);

        int result5 = intValue1 % intValue2;
        System.out.println("Reminder: " + result5);

    }
}
