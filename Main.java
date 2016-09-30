/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package olive;

/**
 *
 * @author Richie
 */

    
import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        List<Olive> olives = new ArrayList<>();
        olives.add(new Olive(OliveName.KALAMATA, OliveColor.PURPLE, 74));
        olives.add(new Olive(OliveName.KALAMATA, OliveColor.PURPLE, 74));
        olives.add(new Olive(OliveName.LIGURIAN, OliveColor.BLACK, 29));
        olives.add(new Olive(OliveName.LIGURIAN, OliveColor.BLACK, 29));
        olives.add(new Olive(OliveName.LIGURIAN, OliveColor.BLACK, 29));
        olives.add(new Olive(OliveName.LIGURIAN, OliveColor.BLACK, 29));

        OlivePress press = new OlivePress();
        int totalOil = press.getOil(olives);

        System.out.println("You got " + totalOil + " units of oil");

    }

}

}
