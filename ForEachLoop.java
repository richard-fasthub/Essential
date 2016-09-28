/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javaapplication2;

/**
 *
 * @author Richie
 */

import java.util.*;

public class ForEachLoop {
    
    public static void main(String[] args){
        
        System.out.println("Ordered Data");
        List<String> list = new ArrayList<>();
        list.add("Dar es salaam");
        list.add("Mwanza");
        list.add("Musoma");
        
        System.out.println("toString() output");
        System.out.println(list);
        System.out.println("");
        
        System.out.println("ArrayList iterator");
        Iterator<String> iterator = list.iterator();
           while (iterator.hasNext()){
               String value = iterator.next();
               System.out.println("value");
                       
    }
        System.out.println("");
        
        System.out.println("ArrayList ForEach");
        for (String value: list){
            System.out.println(value);
        }
        System.out.println("");
        
        System.out.println("JAVA 8 method");
        list.forEach(System.out::println);
        System.out.println("");
        
        System.out.println("unordered data");
        Map<String, String> map = new HashMap<String, String>();
        map.put("Mwanza","Namhura");
        map.put("Shinyanga","Geita");
        map.put("Moshi","Kilimanjaro");
        System.out.println(map);
        System.out.println("");
        
        System.out.println("HashMap Iterator");
        System.out.println("");
        
        System.out.println("HashMap ForEach");
        System.out.println("");
          
        
        
    }
}
