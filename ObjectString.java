/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Richie
 */
public class ObjectString {
    public static void main(String[] args){
        
        String s1 = "Welcome to Calfonia !";
        System.out.println("Length of string:" +s1.length());
        
        int position = s1.indexOf("Calfonia");
        System.out.println("Possition of substring: " + position);
        
        String s2 = "Welcome!";
        int len1 = s2.length();
        System.out.println(len1);
        String s3 = s2.trim();
        System.out.println(s3.length());
    }
}
