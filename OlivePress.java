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

import java.util.List;

public class OlivePress {

    public int getOil(List<Olive> olives) {

        int totalOil = 0;
        for (Olive o : olives) {
            System.out.println(o.getName());
            totalOil += o.crush();
        }

        return totalOil;

    }

}
