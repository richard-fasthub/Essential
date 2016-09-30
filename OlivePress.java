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

    
import java.util.List;

public class OlivePress {

	public int getOil(List<Olive> olives) {

		int totalOil = 0;
		for (Olive o : olives) {
			totalOil += o.crush();
		}

		return totalOil;

	}

}

    

