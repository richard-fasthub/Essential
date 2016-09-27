/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javaepisode2;

/**
 *
 * @author Richie
 */
import java.text.NumberFormat;
import java.until.locale;

public class ObjectNumeric {
    public static void main(String[] args){
        Locale locale = new Locale("da","DK");
        double doubleValue = 1_234_567.89;
     
        NumberFormat numF = NumberFormat.getNumberInstance(locale);
        System.out.println("Number" + numF.format(doubleValue));
        
        NumberFormat curF = NumberFormat.getNumberInstance(locale);
    }
}
