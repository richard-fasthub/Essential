package com.company;

/**
 * Created by Richie on 9/26/2016.
 */
public class MainMax {
    public static  void main(String[] args){
        byte b = 127;
        System.out.println("Byte: " +b);
        if (b <Byte.MAX_VALUE){
            b++;
        }
    System.out.println("Byte: " + b);
    }

}
