/**
 * Created by Richie on 9/26/2016.
 */
public class MainLong {
    public static void main(String[] args){
        int intValue1 = 56;

        int intValue2 =intValue1;
        System.out.println("The 2nd value is " +intValue2);

        long longValue1 = intValue1;
        System.out.println("The long value is " +intValue1);

        short shortValue1 = (short) intValue1;
        System.out.println("The short value is " +shortValue1);

        int intValue3 = 1024;
        byte byteValue = (byte) intValue3;
        System.out.println("The byte value is " +byteValue);
    }
}
