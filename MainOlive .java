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

import java.util.ArrayList;
import java.util.List;

public class MainOlive {

    public static void main(String[] args) {

        List<Olive> olives = new ArrayList<>();
        Olive olive1 = new Olive();
        olives.add(olive1);
        Olive olive2 = new Olive();
        olive2.setOil(1);
        olives.add(olive2);
        Olive olive3 = new Olive();
        olive3.setOil(4);
        olives.add(olive3);

        OlivePress press = new OlivePress();
        int totalOil = press.getOil(olives);
        System.out.println("Total olive oil: " + totalOil);

    }
